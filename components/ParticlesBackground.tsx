"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Pre-compute positions once at module load time (avoids random values inside render)
function generatePositions(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 18;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  return arr;
}

const PARTICLE_POSITIONS = generatePositions(120);

function Particles() {
  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.025;
      ref.current.rotation.x = clock.getElapsedTime() * 0.012;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#A3FF12"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
