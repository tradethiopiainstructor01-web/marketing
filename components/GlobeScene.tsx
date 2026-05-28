'use client';

import { Component, type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Html } from '@react-three/drei';
import * as THREE from 'three';

const points = [
  new THREE.Vector3(0.85, 0.42, 0.52),
  new THREE.Vector3(-0.58, 0.32, -0.92),
  new THREE.Vector3(0.48, -0.72, 0.62),
  new THREE.Vector3(-0.95, -0.1, 0.42),
  new THREE.Vector3(0.9, -0.02, -0.58),
];

const makeArc = (start: THREE.Vector3, end: THREE.Vector3) => {
  const mid = start.clone().add(end).normalize().multiplyScalar(1.7);
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  return curve.getPoints(48);
};

const canCreateWebGLContext = () => {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const context =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');

    if (context && 'getExtension' in context) {
      context.getExtension('WEBGL_lose_context')?.loseContext();
    }

    return Boolean(context);
  } catch {
    return false;
  }
};

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const touchStart = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [visibleArcs, setVisibleArcs] = useState(0);

  const arcs = useMemo(
    () => [
      makeArc(points[0], points[1]),
      makeArc(points[2], points[4]),
      makeArc(points[3], points[0]),
      makeArc(points[1], points[4]),
    ],
    [],
  );

  useEffect(() => {
    const timers = arcs.map((_, index) => window.setTimeout(() => setVisibleArcs(index + 1), 380 + index * 420));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [arcs]);

  useFrame((_, delta) => {
    if (groupRef.current && !dragging) {
      groupRef.current.rotation.y += delta * 0.16;
    }
  });

  const rotateByDelta = (clientX: number) => {
    if (!groupRef.current) return;
    const delta = clientX - touchStart.current;
    touchStart.current = clientX;
    groupRef.current.rotation.y += delta * 0.008;
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={(event) => {
        setDragging(true);
        touchStart.current = event.clientX;
      }}
      onPointerMove={(event) => {
        if (dragging) rotateByDelta(event.clientX);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <ambientLight intensity={1.25} />
      <directionalLight position={[3, 4, 5]} intensity={1.15} />
      <mesh>
        <sphereGeometry args={[1.35, 72, 72]} />
        <meshStandardMaterial color="#1A73E8" metalness={0.08} roughness={0.38} emissive="#083E8B" emissiveIntensity={0.12} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.365, 2]} />
        <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.22} />
      </mesh>
      {points.map((point, index) => (
        <mesh key={index} position={point.clone().normalize().multiplyScalar(1.39)}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1.3} />
        </mesh>
      ))}
      {arcs.map((arc, index) => (
        <Line
          key={index}
          points={arc}
          color="#FFD700"
          lineWidth={3}
          transparent
          opacity={visibleArcs > index ? 1 : 0}
        />
      ))}
    </group>
  );
}

function GlobeFallback() {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.22),transparent_50%)]" />
      <div className="relative h-[220px] w-[220px] sm:h-[270px] sm:w-[270px] lg:h-[380px] lg:w-[380px]">
        <div className="absolute inset-0 rounded-full bg-[#1A73E8] shadow-[inset_-32px_-26px_48px_rgba(8,62,139,0.55),inset_22px_20px_34px_rgba(255,255,255,0.18),0_24px_56px_rgba(0,0,0,0.18)]" />
        <div className="absolute inset-[6px] rounded-full border border-white/30" />
        <div className="absolute inset-x-[16%] top-[18%] h-[64%] rounded-[50%] border-2 border-white/20" />
        <div className="absolute inset-y-[14%] left-1/2 w-px -translate-x-1/2 bg-white/20" />
        <div className="absolute left-[12%] right-[12%] top-1/2 h-px -translate-y-1/2 bg-white/25" />
        <div className="absolute left-[18%] right-[18%] top-[32%] h-px rotate-[-13deg] bg-white/20" />
        <div className="absolute left-[18%] right-[18%] bottom-[32%] h-px rotate-[13deg] bg-white/20" />
        <div className="absolute left-[66%] top-[28%] h-3 w-3 rounded-full bg-[#FFD700] shadow-[0_0_18px_rgba(255,215,0,0.9)]" />
        <div className="absolute left-[30%] top-[38%] h-3 w-3 rounded-full bg-[#FFD700] shadow-[0_0_18px_rgba(255,215,0,0.9)]" />
        <div className="absolute left-[58%] top-[68%] h-3 w-3 rounded-full bg-[#FFD700] shadow-[0_0_18px_rgba(255,215,0,0.9)]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M31 39 C47 15 66 18 71 30" fill="none" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M33 41 C48 58 55 69 61 70" fill="none" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M61 69 C75 55 80 40 71 30" fill="none" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-5 rounded-full bg-white/[0.18] px-4 py-2 text-[11px] font-bold uppercase text-white backdrop-blur-md">
        Global routes
      </div>
    </div>
  );
}

export default function GlobeScene() {
  const [webGLAvailable, setWebGLAvailable] = useState(false);

  useEffect(() => {
    setWebGLAvailable(canCreateWebGLContext());
  }, []);

  const fallback = <GlobeFallback />;

  return (
    <div className="relative h-[300px] w-full touch-pan-y overflow-hidden rounded-[28px] border border-white/30 bg-white/[0.12] shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:h-[360px] lg:h-[520px]">
      {webGLAvailable ? (
        <WebGLErrorBoundary fallback={fallback}>
          <Canvas camera={{ position: [0, 0, 4.4], fov: 44 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
            <Globe />
            <Html position={[0, -1.78, 0]} center>
              <div className="pointer-events-none rounded-full bg-white/[0.18] px-4 py-2 text-[11px] font-bold uppercase text-white backdrop-blur-md">
                Drag to rotate
              </div>
            </Html>
          </Canvas>
        </WebGLErrorBoundary>
      ) : (
        fallback
      )}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.22),transparent_50%)]" />
    </div>
  );
}
