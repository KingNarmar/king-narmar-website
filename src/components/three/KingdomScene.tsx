import { Float, Html, OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";
import { Mesh } from "three";

const MODEL_PATH = "/models/narmer-temp/cow_head_statue.glb";

/**
 * Quick visual controls:
 * - لو الموديل كبير/صغير: عدّل MODEL_SCALE
 * - لو عالي/واطي: عدّل MODEL_POSITION_Y
 * - لو مش مواجه الكاميرا: عدّل MODEL_ROTATION_Y
 */
const MODEL_SCALE = 1.9;
const MODEL_POSITION_Y = -1.35;
const MODEL_ROTATION_Y = 0;

function NarmerTemporaryModel() {
  const modelRef = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y += delta * 0.22;
  });

  return (
    <Float speed={1.15} rotationIntensity={0.22} floatIntensity={0.65}>
      <group
        ref={modelRef}
        position={[0, MODEL_POSITION_Y, 0]}
        rotation={[0, MODEL_ROTATION_Y, 0]}
        scale={MODEL_SCALE}
      >
        <primitive object={scene} />
      </group>
    </Float>
  );
}

function HolographicRings() {
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.z += delta * 0.18;
  });

  return (
    <group ref={ringRef} position={[0, -0.04, -0.2]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 12, 140]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.45}
          transparent
          opacity={0.82}
        />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.08, 0.01, 12, 160]} />
        <meshStandardMaterial
          color="#d4af37"
          emissive="#d4af37"
          emissiveIntensity={0.4}
          transparent
          opacity={0.68}
        />
      </mesh>
    </group>
  );
}

function ModelLoader() {
  return (
    <Html center>
      <span
        style={{
          color: "#d4af37",
          fontFamily: "monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Loading royal model...
      </span>
    </Html>
  );
}

export function KingdomScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0.18, 5.2], fov: 38 }}>
      <color attach="background" args={["#05060a"]} />

      <ambientLight intensity={0.88} />
      <directionalLight
        castShadow
        position={[3.6, 4.4, 4.8]}
        intensity={2.45}
      />
      <pointLight position={[-4, -1.8, 3]} intensity={2.8} color="#38bdf8" />
      <pointLight position={[3, -2.6, 2.4]} intensity={1.9} color="#d4af37" />
      <pointLight position={[0, 2.4, 2.8]} intensity={1.45} color="#f8e7a1" />

      <Stars
        radius={80}
        depth={40}
        count={1400}
        factor={4}
        saturation={0}
        fade
        speed={0.42}
      />

      <HolographicRings />

      <Suspense fallback={<ModelLoader />}>
        <NarmerTemporaryModel />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.45}
      />
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
