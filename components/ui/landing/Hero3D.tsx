"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { generateLogoParticles } from "@/app/utils/generator";

// Responsive particle count: mobile = 1500, desktop = 2500
const getParticleCount = () => {
  if (typeof window === "undefined") return 2000;
  return window.innerWidth < 768 ? 1500 : 2500;
};

const PARTICLE_COUNT = getParticleCount();

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const progress = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []); // Reuse dummy object

  const { viewport, mouse } = useThree();

  const particleData = useMemo(() => generateLogoParticles(PARTICLE_COUNT), []);
  const { chaosPositions, targetPositions, colors } = particleData;

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry.setAttribute(
        "color",
        new THREE.InstancedBufferAttribute(colors, 3)
      );
    }
  }, [colors]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    easing.damp(progress, "current", 1, 1.2, delta);
    const p = progress.current;
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      const cx = chaosPositions[i3];
      const cy = chaosPositions[i3 + 1];
      const cz = chaosPositions[i3 + 2];

      const tx = targetPositions[i3];
      const ty = targetPositions[i3 + 1];
      const tz = targetPositions[i3 + 2];

      const swirlFactor = (1 - p) * 5;
      const currentX = cx + (tx - cx) * p;
      const currentY = cy + (ty - cy) * p;
      const currentZ = cz + (tz - cz) * p;
      const cosSwirl = Math.cos(swirlFactor);
      const sinSwirl = Math.sin(swirlFactor);
      let finalX = currentX * cosSwirl - currentY * sinSwirl;
      let finalY = currentX * sinSwirl + currentY * cosSwirl;
      let finalZ = currentZ;

      if (p > 0.8) {
        const dx = finalX - mouseX;
        const dy = finalY - mouseY;
        const distSq = dx * dx + dy * dy; // Use squared distance to avoid sqrt

        // mouse effect radius squared
        const mouseRadiusSq = 2.25; // 1.5 * 1.5

        if (distSq < mouseRadiusSq) {
          const dist = Math.sqrt(distSq); // Only calculate sqrt when needed
          const force = (1.5 - dist) / 1.5;
          const repulsionStrength = 2 * force;
          const angle = Math.atan2(dy, dx);
          finalX += Math.cos(angle) * repulsionStrength;
          finalY += Math.sin(angle) * repulsionStrength;
          finalZ -= repulsionStrength * 2;
          dummy.rotation.set(force * 5, force * 5, force * 5);
        } else {
          dummy.rotation.set(0, 0, 0);
        }
      }

      dummy.position.set(finalX, finalY, finalZ);
      const scale = 0.12;
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current && p > 0.5) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, PARTICLE_COUNT]}
      >
        <boxGeometry args={[0.9, 0.9, 0.9]}>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </boxGeometry>
        <meshStandardMaterial
          vertexColors={true}
          roughness={0.15}
          metalness={0.9}
          emissive="#1a0b2e"
          emissiveIntensity={0.2}
        />
      </instancedMesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false }}
      >
        <Environment preset="warehouse" />
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2.5}
          color={"#7c3aed"}
          castShadow
        />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={1.5}
          color={"#06b6d4"}
        />

        <Particles />
        <fog attach="fog" args={["#0a0a0a", 8, 35]} />
      </Canvas>
    </div>
  );
}
