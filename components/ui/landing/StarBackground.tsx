"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function generateStarTexture() {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const centerX = 64;
  const centerY = 64;

  ctx.clearRect(0, 0, 128, 128);

  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    60
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

const StarFieldMaterial = {
  vertexShader: `
    attribute float scale;
    attribute float shift;
    uniform float time;
    varying float vAlpha;
    void main() {
        vec3 pos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        float pulse = 1.0 + 0.2 * sin(time * 2.0 + shift);
        gl_PointSize = scale * pulse * 70.0 * (10.0 / gl_Position.w); 
        vAlpha = 0.7 + 0.3 * sin(time * 1.5 + shift); 
    }
    `,
  fragmentShader: `
    uniform sampler2D map;
    varying float vAlpha;
    void main() {
        vec4 tex = texture2D(map, gl_PointCoord);
        if (tex.a < 0.05) discard;
        gl_FragColor = vec4(tex.rgb, tex.a * vAlpha);
    }
    `,
};

function StarField({ count = 2000 }: { count?: number }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const meshRef = useRef<THREE.Points>(null);
  const [texture] = useState(() =>
    typeof window !== "undefined" ? generateStarTexture() : null
  );

  const [pointsData] = useState(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const shifts = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const r = 50 + Math.random() * 50;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      scales[i] = Math.random() * 2.0 + 0.5;
      shifts[i] = Math.random() * 100;
    }
    return { positions, scales, shifts };
  });

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      meshRef.current.material.uniforms.time.value = state.clock.elapsedTime;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  if (!texture) return null;

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[pointsData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={count}
          args={[pointsData.scales, 1]}
        />
        <bufferAttribute
          attach="attributes-shift"
          count={count}
          args={[pointsData.shifts, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        uniforms={{ time: { value: 0 }, map: { value: texture } }}
        transparent
        depthWrite={false}
        vertexShader={StarFieldMaterial.vertexShader}
        fragmentShader={StarFieldMaterial.fragmentShader}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function StarBackground() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false }}
      >
        <StarField count={3000} />
      </Canvas>
    </div>
  );
}
