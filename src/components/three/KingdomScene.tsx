import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { ExtrudeGeometry, Shape, type Group } from "three";

type Point2D = [number, number];

const CROWN_DEPTH = 0.24;
const CROWN_BEVEL_SIZE = 0.045;
const CROWN_BEVEL_THICKNESS = 0.04;

const EXTRUDE_SETTINGS = {
  depth: CROWN_DEPTH,
  bevelEnabled: true,
  bevelSegments: 4,
  bevelSize: CROWN_BEVEL_SIZE,
  bevelThickness: CROWN_BEVEL_THICKNESS,
};

function createExtrudedShape(points: Point2D[]) {
  const shape = new Shape();
  const [firstPoint, ...restPoints] = points;

  shape.moveTo(firstPoint[0], firstPoint[1]);

  restPoints.forEach(([x, y]) => {
    shape.lineTo(x, y);
  });

  shape.closePath();

  const geometry = new ExtrudeGeometry(shape, EXTRUDE_SETTINGS);
  geometry.center();

  return geometry;
}

function useCrownGeometries() {
  return useMemo(
    () => ({
      body: createExtrudedShape([
        [-1.8, -0.48],
        [-1.45, 0.82],
        [-0.78, 0.18],
        [0, 1.72],
        [0.78, 0.18],
        [1.45, 0.82],
        [1.8, -0.48],
      ]),
      upperBand: createExtrudedShape([
        [-1.82, -0.55],
        [1.82, -0.55],
        [1.68, -0.28],
        [-1.68, -0.28],
      ]),
      lowerBand: createExtrudedShape([
        [-1.92, -0.9],
        [1.92, -0.9],
        [1.72, -0.55],
        [-1.72, -0.55],
      ]),
      centerGem: createExtrudedShape([
        [0, 0.36],
        [0.22, -0.02],
        [0, -0.4],
        [-0.22, -0.02],
      ]),
      bandGem: createExtrudedShape([
        [0, -0.6],
        [0.14, -0.78],
        [0, -0.96],
        [-0.14, -0.78],
      ]),
    }),
    [],
  );
}

function CrownFinial({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <sphereGeometry args={[0.1, 28, 28]} />
      <meshStandardMaterial
        color="#ffe27a"
        metalness={0.98}
        roughness={0.1}
        emissive="#7a5200"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function CrownDrape({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[0, 0, Math.PI]} castShadow receiveShadow>
      <torusGeometry args={[0.42, 0.035, 18, 80, Math.PI]} />
      <meshStandardMaterial
        color="#ffe27a"
        metalness={0.98}
        roughness={0.1}
        emissive="#7a5200"
        emissiveIntensity={0.16}
      />
    </mesh>
  );
}

function RoyalCrown() {
  const crownRef = useRef<Group>(null);
  const geometries = useCrownGeometries();

  useFrame((_, delta) => {
    if (!crownRef.current) return;

    crownRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.58}>
      <group
        ref={crownRef}
        position={[0, -0.08, 0]}
        rotation={[-0.08, -0.28, 0]}
        scale={1.08}
      >
        <mesh geometry={geometries.body} position={[0, -0.02, 0]} castShadow receiveShadow>
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.96}
            roughness={0.14}
            emissive="#5f3f00"
            emissiveIntensity={0.18}
          />
        </mesh>

        <mesh geometry={geometries.upperBand} position={[0, 0, 0.18]} castShadow receiveShadow>
          <meshStandardMaterial color="#ffe27a" metalness={0.98} roughness={0.1} />
        </mesh>

        <mesh geometry={geometries.lowerBand} position={[0, 0, 0.23]} castShadow receiveShadow>
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.96}
            roughness={0.14}
            emissive="#5f3f00"
            emissiveIntensity={0.14}
          />
        </mesh>

        <mesh position={[0, -0.95, 0.15]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[1.42, 0.09, 24, 120]} />
          <meshStandardMaterial color="#8a5a08" metalness={0.9} roughness={0.22} />
        </mesh>

        <mesh geometry={geometries.centerGem} position={[0, -0.02, 0.32]} castShadow receiveShadow>
          <meshStandardMaterial color="#ffe27a" metalness={0.98} roughness={0.08} />
        </mesh>

        <mesh geometry={geometries.bandGem} position={[0, 0, 0.36]} castShadow receiveShadow>
          <meshStandardMaterial color="#ffe27a" metalness={0.98} roughness={0.08} />
        </mesh>

        <CrownDrape position={[-1.18, 0.42, 0.26]} />
        <CrownDrape position={[-0.4, 0.66, 0.28]} />
        <CrownDrape position={[0.4, 0.66, 0.28]} />
        <CrownDrape position={[1.18, 0.42, 0.26]} />

        <CrownFinial position={[-1.45, 0.86, 0.3]} />
        <CrownFinial position={[-0.78, 0.22, 0.3]} />
        <CrownFinial position={[0, 1.72, 0.3]} />
        <CrownFinial position={[0.78, 0.22, 0.3]} />
        <CrownFinial position={[1.45, 0.86, 0.3]} />
      </group>
    </Float>
  );
}

export function KingdomScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} shadows>
      <color attach="background" args={["#05060a"]} />

      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 5, 5]} intensity={2.55} />
      <pointLight position={[-4, -2, 3]} intensity={2.5} color="#38bdf8" />
      <pointLight position={[3, -3, 2]} intensity={2.0} color="#d4af37" />

      <Stars
        radius={80}
        depth={40}
        count={1400}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <RoyalCrown />

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
