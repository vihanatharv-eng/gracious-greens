"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Leaf geometry ────────────────────────────────────────────────────────────
// Organic leaf via two bezier arcs, parameterised for natural asymmetry
function makeLeafShape(asym = 0) {
  const s = new THREE.Shape();
  const l = 0.44 + asym * 0.06;
  const r = 0.50 - asym * 0.06;
  s.moveTo(0, 0);
  s.bezierCurveTo(-l, 0.22, -l * 1.15, 0.58, 0, 1);
  s.bezierCurveTo(r * 1.15, 0.58, r, 0.22, 0, 0);
  return s;
}

// ─── Single leaf ──────────────────────────────────────────────────────────────
interface LeafProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  phase: number;
  asym: number;
}

function Leaf({ position, rotation, scale, color, speed, phase, asym }: LeafProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const [ix, iy, iz] = position;
  const [irx, iry, irz] = rotation;

  const leafGeo = useMemo(() => new THREE.ShapeGeometry(makeLeafShape(asym), 18), [asym]);

  const veinGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pts: number[] = [];
    pts.push(0, 0.05, 0.001,  0, 0.93, 0.001);
    [0.22, 0.45, 0.66].forEach(y => {
      const x = 0.34 - y * 0.2;
      pts.push(0, y, 0.001, -x, y + 0.15, 0.001);
      pts.push(0, y, 0.001,  x, y + 0.15, 0.001);
    });
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const dy = Math.sin(t * speed + phase) * 0.2;
    const drz = Math.sin(t * speed * 0.6 + phase) * 0.08;
    const dry = Math.sin(t * speed * 0.38 + phase + 1) * 0.11;

    if (meshRef.current) {
      meshRef.current.position.set(ix, iy + dy, iz);
      meshRef.current.rotation.set(irx, iry + dry, irz + drz);
    }
    if (lineRef.current) {
      lineRef.current.position.set(ix, iy + dy, iz);
      lineRef.current.rotation.set(irx, iry + dry, irz + drz);
    }
  });

  return (
    <>
      <mesh ref={meshRef} scale={scale} geometry={leafGeo}>
        <meshStandardMaterial
          color={color}
          side={THREE.DoubleSide}
          roughness={0.78}
          metalness={0.04}
          transparent
          opacity={0.91}
        />
      </mesh>
      <lineSegments ref={lineRef} scale={scale} geometry={veinGeo}>
        <lineBasicMaterial color="#142a12" transparent opacity={0.16} />
      </lineSegments>
    </>
  );
}

// ─── Scene ────────────────────────────────────────────────────────────────────
const PALETTE = [
  "#2d5c27", "#3a7230", "#4a8c3c", "#5e9e4a",
  "#a8bca1", "#8faf6e", "#6b9e58", "#3d6b35",
  "#c4a35a", "#d4b96a",   // gold dried leaves — accent
];

function LeafScene() {
  const leaves = useMemo(() => {
    // Deterministic RNG — same output server & client, no hydration mismatch
    let s = 42;
    const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };

    return Array.from({ length: 24 }, (_, i) => {
      const depth = rng() * 6;                        // 0=close, 6=far
      const sc    = (0.5 + rng() * 0.95) * (1.3 - depth * 0.12);
      return {
        id: i,
        position: [
          (rng() - 0.28) * 15 + 1.8,   // right-weighted like the reference
          (rng() - 0.5)  * 11,
          -depth,
        ] as [number, number, number],
        rotation: [
          rng() * Math.PI,
          rng() * Math.PI,
          rng() * Math.PI * 2,
        ] as [number, number, number],
        scale: sc,
        color: PALETTE[Math.floor(rng() * PALETTE.length)]!,
        speed: 0.22 + rng() * 0.32,
        phase: rng() * Math.PI * 2,
        asym:  (rng() - 0.5) * 0.55,
      };
    });
  }, []);

  return (
    <>
      {/* Warm overhead key light — matches the reference's bright top highlight */}
      <ambientLight intensity={0.5}  color="#ddeedd" />
      <directionalLight position={[5,  10,  7]} intensity={1.5} color="#fff8ec" />
      {/* Cool fill from lower-left */}
      <directionalLight position={[-6, -4, -4]} intensity={0.3} color="#a8bca1" />
      {/* Subtle right rim */}
      <directionalLight position={[10,  1,  3]} intensity={0.55} color="#fffbeb" />

      {leaves.map(l => <Leaf key={l.id} {...l} />)}
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 56 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <LeafScene />
    </Canvas>
  );
}
