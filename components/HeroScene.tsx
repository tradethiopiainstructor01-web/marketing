'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Group, Points, SphereGeometry, MeshStandardMaterial } from 'three';
import useWebglSupport from './useWebglSupport';

function SteamParticles() {
  const ref = useRef<Points>(null!);
  const positions = useMemo(() => {
    const array = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * 1.2;
      array[i * 3 + 1] = Math.random() * 3.2 + 0.3;
      array[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
    }
    return array;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positionsArray.length; i += 3) {
      positionsArray[i + 1] += delta * 0.8;
      positionsArray[i] += Math.sin(i * 0.3 + Date.now() * 0.001) * 0.0008;
      if (positionsArray[i + 1] > 4.4) {
        positionsArray[i + 1] = -0.2;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#F9F1D6" size={0.05} transparent opacity={0.75} depthWrite={false} />
    </points>
  );
}

function Saucer() {
  const ref = useRef<Group>(null!);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.015;
  });

  return (
    <group ref={ref}>
      <mesh position={[0, -0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.08, 48, 120]} />
        <meshStandardMaterial color="#F6F6F4" metalness={0.1} roughness={0.42} />
      </mesh>
      <mesh position={[0, -0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.05, 1.25, 64, 1]} />
        <meshStandardMaterial color="#E9E9E7" metalness={0.08} roughness={0.45} />
      </mesh>
    </group>
  );
}

function CoffeeCup() {
  const groupRef = useRef<Group>(null!);
  const dragging = useRef(false);
  const pointerX = useRef(0);

  useFrame((_, delta) => {
    if (groupRef.current && !dragging.current) {
      groupRef.current.rotation.y += delta * 0.09;
    }
  });

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    dragging.current = true;
    pointerX.current = event.clientX;
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!dragging.current || !groupRef.current) return;
    const deltaX = event.clientX - pointerX.current;
    pointerX.current = event.clientX;
    groupRef.current.rotation.y += deltaX * 0.0075;
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  // Swirl animation for coffee surface
  const swirlRef = useRef<Group>(null!);
  useFrame((_, delta) => {
    if (swirlRef.current) {
      swirlRef.current.rotation.z += delta * 0.45; // swirl speed
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      position={[0, -0.03, 0]}
    >
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.78, 0.78, 0.92, 48, 1, true]} />
        <meshStandardMaterial color="#FFFDF8" metalness={0.14} roughness={0.42} emissive="#FFF6D7" emissiveIntensity={0.04} />
      </mesh>
      <mesh position={[0, 0.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.78, 48]} />
        <meshStandardMaterial color="#FFFDF8" metalness={0.1} roughness={0.28} />
      </mesh>
      {/* Swirling coffee surface */}
      <group ref={swirlRef} position={[0, 0.451, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <circleGeometry args={[0.72, 48]} />
          <meshStandardMaterial color="#C9945D" metalness={0.18} roughness={0.7} />
        </mesh>
        {/* Swirl highlight */}
        <mesh>
          <ringGeometry args={[0.56, 0.72, 64, 1, 0, Math.PI * 1.5]} />
          <meshStandardMaterial color="#ffe7b2" metalness={0.12} roughness={0.5} transparent opacity={0.22} />
        </mesh>
      </group>
      <mesh position={[0.82, 0.32, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.16, 0.06, 16, 32]} />
        <meshStandardMaterial color="#FFFDF8" metalness={0.16} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.72, 0.78, 48, 1]} />
        <meshStandardMaterial color="#EDECE9" metalness={0.1} roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const supportsWebGL = useWebglSupport();

  if (!supportsWebGL) {
    return (
      <div className="relative mx-auto h-[420px] w-full overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#e9f5ff] via-[#d9ebff] to-[#c7daf2] shadow-glow sm:h-[520px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),transparent_20%),radial-gradient(circle_at_80%_40%,_rgba(220,230,255,0.32),transparent_25%)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#F5C842]/30 bg-white/5 text-5xl text-[#F5C842] shadow-[0_0_70px_rgba(245,200,66,0.18)]">
            ☕
          </div>
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#F5C842]">Coffee scene preview</p>
            <p className="mt-2 max-w-md text-base leading-7 text-white/80">WebGL is unavailable in this browser. Use Chrome, Edge, or another supported browser for the full 3D experience.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <span className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.25em] text-white/70">Best on desktop</span>
            <span className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.25em] text-white/70">Enable WebGL in settings</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-[420px] w-full overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#eaf6ff] via-[#d7ecff] to-[#c5dff4] shadow-glow sm:h-[520px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),transparent_35%)]" />
      <Canvas
        camera={{ position: [0, 1.6, 5], fov: 42 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.62} />
        <pointLight position={[2, 4, 2]} intensity={4.6} color="#FFF9C3" />
        <pointLight position={[-2, 1.5, 3]} intensity={1.85} color="#FFE38F" />
        <pointLight position={[0, 2.2, 0]} intensity={1.6} color="#FFF3C1" />
        <spotLight position={[0, 6, 4]} angle={0.34} intensity={1.55} penumbra={0.45} castShadow color="#FFF2A1" />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.24, 0]}>
          <circleGeometry args={[4.5, 64]} />
          <meshStandardMaterial color="#EFF6FF" metalness={0.05} roughness={0.55} emissive="#dfe8fb" emissiveIntensity={0.06} />
        </mesh>
        <Saucer />
        <CoffeeCup />
        <SteamParticles />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
