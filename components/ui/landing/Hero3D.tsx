"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { generateLogoParticles } from "@/app/utils/generator";

// Responsive particle 
const getParticleCount = () => {
  if (typeof window === "undefined") return 2000;
  return window.innerWidth < 768 ? 1500 : 2500;
};

const PARTICLE_COUNT = getParticleCount();

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const progress = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []); 

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
    const time = state.clock.elapsedTime;

    meshRef.current.rotation.y = time * 0.08;
    meshRef.current.rotation.x = Math.sin(time * 0.05) * 0.05;
    const breathingScale = 1 + Math.sin(time * 0.6) * 0.03;

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

      if (p > 0.95) {
        const waveOffset = i * 0.01;
        finalX += Math.sin(time * 0.8 + waveOffset) * 0.08;
        finalY += Math.cos(time * 0.6 + waveOffset) * 0.08;
        finalZ += Math.sin(time * 0.5 + waveOffset) * 0.05;
      }

      dummy.position.set(finalX, finalY, finalZ);

      const rotationSpeed = 0.5 + (i % 100) * 0.01;
      dummy.rotation.set(
        time * rotationSpeed * 0.2,
        time * rotationSpeed * 0.3,
        time * rotationSpeed * 0.1
      );


      const particleScale = 0.12 * breathingScale * (1 + Math.sin(time + i * 0.1) * 0.05);
      dummy.scale.set(particleScale, particleScale, particleScale);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
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
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </instancedMesh>
    </Float>
  );
}


function AmbientParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 80;

  /* eslint-disable react-hooks/purity */
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 25,
        y: (Math.random() - 0.5) * 25,
        z: (Math.random() - 0.5) * 15 - 5,
        speed: 0.1 + Math.random() * 0.2,
        radius: 0.15 + Math.random() * 0.3,
      });
    }
    return pos;
  }, [count]);
  /* eslint-enable react-hooks/purity */

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    positions.forEach((pos, i) => {
      const t = time * pos.speed;
      const x = pos.x + Math.sin(t) * 2;
      const y = pos.y + Math.cos(t * 0.7) * 2;
      const z = pos.z + Math.sin(t * 0.5) * 1;

      dummy.position.set(x, y, z);
      dummy.rotation.set(t * 0.5, t * 0.3, 0);
      dummy.scale.setScalar(pos.radius * (1 + Math.sin(t * 2) * 0.2));
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.15} />
    </instancedMesh>
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
        <AmbientParticles />
        <fog attach="fog" args={["#0a0a0a", 8, 35]} />
      </Canvas>
    </div>
  );
}
