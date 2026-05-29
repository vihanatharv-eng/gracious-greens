"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

function RingTunnel() {
  const ringsRef = useRef<THREE.Group>(null);
  const ringCount = 12;

  const rings = useMemo(() =>
    Array.from({ length: ringCount }, (_, i) => ({
      radius: 1.5 + i * 0.8,
      z: -i * 1.2,
      opacity: 1 - i * 0.07,
      speed: 0.3 + i * 0.1,
    })), []);

  useFrame((state) => {
    if (!ringsRef.current) return;
    const t = state.clock.elapsedTime;
    ringsRef.current.children.forEach((ring, i) => {
      const config = rings[i]!;
      ring.rotation.z = t * config.speed * 0.05;
      const s = 1 + Math.sin(t * 0.5 + i * 0.4) * 0.08;
      ring.scale.set(s, s, 1);
    });
  });

  return (
    <group ref={ringsRef}>
      {rings.map((ring, i) => (
        <mesh key={i} position={[0, 0, ring.z]} rotation={[0, 0, i * 0.3]}>
          <ringGeometry args={[ring.radius - 0.03, ring.radius, 64]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#a8bca1" : "#fffbeb"}
            transparent
            opacity={ring.opacity * 0.35}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingText() {
  const groupRef = useRef<THREE.Group>(null);
  const mat1Ref = useRef<THREE.MeshStandardMaterial>(null);
  const mat2Ref = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.1;
      groupRef.current.rotation.x = Math.cos(t * 0.12) * 0.05;
    }
    if (mat1Ref.current) mat1Ref.current.opacity = 0.7 + Math.sin(t * 0.8) * 0.15;
    if (mat2Ref.current) mat2Ref.current.opacity = 0.5 + Math.cos(t * 0.6) * 0.12;
  });

  const font =
    "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vXDXbtM.woff2";

  return (
    <group ref={groupRef} position={[0, 0, -3]}>
      <Text position={[0, 0.5, 0]} fontSize={1.8} anchorX="center" anchorY="middle"
        font={font} letterSpacing={0.15}>
        GRACIOUS
        <meshStandardMaterial ref={mat1Ref} color="#fffbeb" transparent opacity={0.8}
          roughness={0.3} metalness={0.1} />
      </Text>
      <Text position={[0, -1.2, 0]} fontSize={1.8} anchorX="center" anchorY="middle"
        font={font} letterSpacing={0.15}>
        GREENS
        <meshStandardMaterial ref={mat2Ref} color="#a8bca1" transparent opacity={0.6}
          roughness={0.4} metalness={0.05} />
      </Text>
    </group>
  );
}

function Scene() {
  const { pointer } = useThree();
  const cameraGroup = useRef<THREE.Group>(null);

  useFrame(() => {
    if (cameraGroup.current) {
      cameraGroup.current.rotation.y +=
        (pointer.x * 0.03 - cameraGroup.current.rotation.y) * 0.05;
      cameraGroup.current.rotation.x +=
        (pointer.y * 0.03 - cameraGroup.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={cameraGroup}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#fffbeb" />
      <pointLight position={[-10, -5, 5]} intensity={0.4} color="#a8bca1" />
      <RingTunnel />
      <FloatingText />
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}
