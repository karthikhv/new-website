"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 120 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  // Compute positions once using a stable ref (avoids useMemo purity lint)
  const positionsRef = useRef<Float32Array | null>(null);
  if (positionsRef.current === null) {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line react-hooks/purity
      arr[i * 3] = (Math.random() - 0.5) * 18;
      // eslint-disable-next-line react-hooks/purity
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      // eslint-disable-next-line react-hooks/purity
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    positionsRef.current = arr;
  }
  const positions = positionsRef.current;

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
          args={[positions, 3]}
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
