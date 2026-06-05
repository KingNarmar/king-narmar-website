import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function RoyalCore() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.45;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.75}
          roughness={0.18}
          emissive="#332600"
          emissiveIntensity={0.22}
        />
      </mesh>
    </Float>
  );
}

export function KingdomScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }}>
      <color attach="background" args={["#05060a"]} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} />
      <pointLight position={[-4, -2, 3]} intensity={2.5} color="#38bdf8" />
      <pointLight position={[3, -3, 2]} intensity={1.6} color="#d4af37" />

      <Stars
        radius={80}
        depth={40}
        count={1400}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <RoyalCore />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}
