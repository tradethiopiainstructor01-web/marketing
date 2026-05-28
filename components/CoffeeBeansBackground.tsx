'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Mesh } from 'three';
import useWebglSupport from './useWebglSupport';

function Bean({ position, speed }: { position: [number, number, number]; speed: number }) {
  const ref = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * 0.18;
    ref.current.rotation.y += delta * speed * 0.12;
    ref.current.position.y += delta * 0.02;
    if (ref.current.position.y > 5) {
      ref.current.position.y = -5;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.18, 8, 6]} />
      <meshStandardMaterial color="#2A0F00" metalness={0.15} roughness={0.8} />
    </mesh>
  );
}

export default function CoffeeBeansBackground() {
  const supportsWebGL = useWebglSupport();
  const beans = useMemo(() => {
    return Array.from({ length: 25 }, () => {
      const position = [
        (Math.random() - 0.5) * 16,
        Math.random() * 10 - 3,
        -(Math.random() * 4),
      ] as [number, number, number];

      return {
        position,
        speed: 0.08 + Math.random() * 0.08,
      };
    });
  }, []);

  if (!supportsWebGL) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        style={{ height: '100%', width: '100%' }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 3, 5]} intensity={0.6} color="#E8650A" />
        {beans.map((bean, index) => (
          <Bean key={index} position={bean.position} speed={bean.speed} />
        ))}
      </Canvas>
    </div>
  );
}
