import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  CanvasTexture,
  RepeatWrapping,
  SRGBColorSpace,
  type Mesh,
} from "three";

const PYRAMID_RADIUS = 1.35;
const PYRAMID_HEIGHT = 2.15;

function createPyramidBrickTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;

  const context = canvas.getContext("2d");

  if (!context) {
    return new CanvasTexture(canvas);
  }

  const gradient = context.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, "#f8e7a1");
  gradient.addColorStop(0.38, "#d4af37");
  gradient.addColorStop(1, "#7c5c13");

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.globalAlpha = 0.16;
  context.fillStyle = "#2f2400";

  for (let i = 0; i < 1200; i += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2.2;

    context.fillRect(x, y, size, size);
  }

  context.globalAlpha = 0.34;
  context.strokeStyle = "#5f450b";
  context.lineWidth = 3;

  const rowHeight = 48;
  const brickWidth = 92;

  for (let y = rowHeight; y < canvas.height; y += rowHeight) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }

  context.globalAlpha = 0.28;
  context.lineWidth = 2;

  for (let row = 0; row < canvas.height / rowHeight; row += 1) {
    const yStart = row * rowHeight;
    const yEnd = yStart + rowHeight;
    const offset = row % 2 === 0 ? 0 : brickWidth / 2;

    for (let x = -brickWidth; x < canvas.width + brickWidth; x += brickWidth) {
      context.beginPath();
      context.moveTo(x + offset, yStart);
      context.lineTo(x + offset, yEnd);
      context.stroke();
    }
  }

  context.globalAlpha = 0.28;
  context.strokeStyle = "#fff2b8";
  context.lineWidth = 1;

  for (let y = rowHeight; y < canvas.height; y += rowHeight) {
    context.beginPath();
    context.moveTo(0, y - 2);
    context.lineTo(canvas.width, y - 2);
    context.stroke();
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1.35, 1.35);
  texture.needsUpdate = true;

  return texture;
}

function RoyalPyramid() {
  const pyramidRef = useRef<Mesh>(null);
  const brickTexture = useMemo(() => createPyramidBrickTexture(), []);

  useFrame((_, delta) => {
    if (!pyramidRef.current) return;

    pyramidRef.current.rotation.y += delta * 0.42;
  });

  return (
    <Float speed={1.25} rotationIntensity={0.2} floatIntensity={0.62}>
      <mesh
        ref={pyramidRef}
        position={[0, -0.08, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <coneGeometry args={[PYRAMID_RADIUS, PYRAMID_HEIGHT, 4, 1]} />
        <meshStandardMaterial
          map={brickTexture}
          color="#d4af37"
          metalness={0.7}
          roughness={0.28}
          emissive="#2f2400"
          emissiveIntensity={0.18}
        />
      </mesh>
    </Float>
  );
}

export function KingdomScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }}>
      <color attach="background" args={["#05060a"]} />

      <ambientLight intensity={0.78} />
      <directionalLight position={[4, 5, 5]} intensity={2.25} />
      <pointLight position={[-4, -2, 3]} intensity={2.5} color="#38bdf8" />
      <pointLight position={[3, -3, 2]} intensity={1.7} color="#d4af37" />

      <Stars
        radius={80}
        depth={40}
        count={1400}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <RoyalPyramid />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate
        autoRotate={false}
        rotateSpeed={0.7}
      />
    </Canvas>
  );
}
