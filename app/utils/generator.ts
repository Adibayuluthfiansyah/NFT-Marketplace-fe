import * as THREE from "three";


interface ParticleData {
  chaosPositions: Float32Array;
  targetPositions: Float32Array;
  colors: Float32Array; 
}

function distToSegment(p: {x:number, y:number}, v: {x:number, y:number}, w: {x:number, y:number}) {
  const l2 = (v.x - w.x)**2 + (v.y - w.y)**2;
  if (l2 == 0) return (p.x - v.x)**2 + (p.y - v.y)**2;
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.sqrt((p.x - (v.x + t * (w.x - v.x)))**2 + (p.y - (v.y + t * (w.y - v.y)))**2);
}

export function generateLogoParticles(count: number): ParticleData {
  const chaos = new Float32Array(count * 3);
  const target = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const dummy = new THREE.Vector3();
  const color = new THREE.Color();

  // Vibrant purple to cyan gradient for modern look
  const colorLeft = new THREE.Color("#7c3aed");  // Vibrant purple
  const colorRight = new THREE.Color("#06b6d4"); // Bright cyan


  for (let i = 0; i < count; i++) {
    const r = 20 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    dummy.setFromSphericalCoords(r, phi, theta);
    chaos[i * 3] = dummy.x;
    chaos[i * 3 + 1] = dummy.y;
    chaos[i * 3 + 2] = dummy.z;
  }

  const validVoxels: THREE.Vector3[] = [];
  const voxelSize = 0.15; 
  const range = 3.0;

  const ringRadiusOuter = 2.8;
  const ringRadiusInner = 2.0;
  
  const pA = {x: -1.5, y: 1.2};
  const pB = {x: 1.5, y: 1.2};
  const pC = {x: -1.0, y: -1.8};

  for (let y = -range; y <= range; y += voxelSize) {
    for (let x = -range; x <= range; x += voxelSize) {
      for (let z = -0.5; z <= 0.5; z += voxelSize) {
        
        let isInside = false;
        const distCenter = Math.sqrt(x*x + y*y);
        const inRing = distCenter < ringRadiusOuter && distCenter > ringRadiusInner;
        
        const angle = Math.atan2(y, x);
        const isGap = (angle > 0.5 && angle < 0.8) || (angle > -2.5 && angle < -2.2);

        if (inRing && !isGap) isInside = true;
        if (x > pA.x && x < pB.x && y > pA.y - 0.4 && y < pA.y + 0.2) isInside = true;
        const distDiagonal = distToSegment({x, y}, pB, pC);
        if (distDiagonal < 0.35) isInside = true;

        if (isInside) {
          validVoxels.push(new THREE.Vector3(
            x + (Math.random() - 0.5) * 0.02, 
            y + (Math.random() - 0.5) * 0.02, 
            z + (Math.random() - 0.5) * 0.02
          ));
        }
      }
    }
  }

  for (let i = validVoxels.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [validVoxels[i], validVoxels[j]] = [validVoxels[j], validVoxels[i]];
  }

  for (let i = 0; i < count; i++) {
    const v = validVoxels[i % validVoxels.length] || new THREE.Vector3(0, 0, 0);
    target[i * 3] = v.x;
    target[i * 3 + 1] = v.y;
    target[i * 3 + 2] = v.z;


    const normalizedX = (v.x + 2.5) / 5.0; 
    const mixFactor = Math.max(0, Math.min(1, normalizedX)); 
    color.copy(colorLeft).lerp(colorRight, mixFactor);

    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  return { chaosPositions: chaos, targetPositions: target, colors: colors };
}