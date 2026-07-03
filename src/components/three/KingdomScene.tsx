import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  DoubleSide,
  QuadraticBezierCurve3,
  Vector3,
  type Group,
} from "three";

type CrownAnchor = {
  angle: number;
  height: number;
  radius: number;
};

const RING_RADIUS = 1.42;
const BAND_TOP_Y = -0.2;
const BAND_CENTER_Y = -0.58;
const BAND_HEIGHT = 0.72;

const CROWN_ANCHORS: CrownAnchor[] = [
  { angle: 0, height: 1.52, radius: 0.22 },
  { angle: Math.PI / 4, height: 1.08, radius: 0.18 },
  { angle: Math.PI / 2, height: 0.86, radius: 0.16 },
  { angle: (3 * Math.PI) / 4, height: 1.02, radius: 0.17 },
  { angle: Math.PI, height: 1.34, radius: 0.2 },
  { angle: (5 * Math.PI) / 4, height: 1.02, radius: 0.17 },
  { angle: (3 * Math.PI) / 2, height: 0.86, radius: 0.16 },
  { angle: (7 * Math.PI) / 4, height: 1.08, radius: 0.18 },
];

function ringPoint(angle: number, radius: number, y: number): [number, number, number] {
  return [Math.sin(angle) * radius, y, Math.cos(angle) * radius];
}

function CrownPoint({ anchor }: { anchor: CrownAnchor }) {
  const position = ringPoint(
    anchor.angle,
    RING_RADIUS,
    BAND_TOP_Y + anchor.height / 2,
  );
  const finialPosition = ringPoint(
    anchor.angle,
    RING_RADIUS,
    BAND_TOP_Y + anchor.height + 0.11,
  );

  return (
    <group>
      <mesh
        position={position}
        rotation={[0, anchor.angle + Math.PI / 4, 0]}
        castShadow
        receiveShadow
      >
        <coneGeometry args={[anchor.radius, anchor.height, 4, 1, false]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.96}
          roughness={0.14}
          emissive="#5f3f00"
          emissiveIntensity={0.14}
        />
      </mesh>

      <mesh position={finialPosition} castShadow receiveShadow>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial
          color="#ffe27a"
          metalness={0.98}
          roughness={0.08}
          emissive="#8a5a08"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function CrownSwag({ startAngle, endAngle }: { startAngle: number; endAngle: number }) {
  const curve = useMemo(() => {
    const start = new Vector3(...ringPoint(startAngle, RING_RADIUS * 0.98, 0.18));
    const end = new Vector3(...ringPoint(endAngle, RING_RADIUS * 0.98, 0.18));
    const middleAngle = (startAngle + endAngle) / 2;
    const control = new Vector3(
      ...ringPoint(middleAngle, RING_RADIUS * 1.02, -0.16),
    );

    return new QuadraticBezierCurve3(start, control, end);
  }, [startAngle, endAngle]);

  return (
    <mesh castShadow receiveShadow>
      <tubeGeometry args={[curve, 36, 0.035, 12, false]} />
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

function CrownGem({ angle, y, size = 0.15 }: { angle: number; y: number; size?: number }) {
  return (
    <mesh
      position={ringPoint(angle, RING_RADIUS * 1.035, y)}
      rotation={[0, angle, Math.PI / 4]}
      castShadow
      receiveShadow
    >
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color="#ffe27a"
        metalness={0.98}
        roughness={0.08}
        emissive="#8a5a08"
        emissiveIntensity={0.18}
      />
    </mesh>
  );
}

function RoyalCrown() {
  const crownRef = useRef<Group>(null);
  const swagPairs = useMemo(
    () =>
      CROWN_ANCHORS.map((anchor, index) => ({
        start: anchor.angle,
        end: CROWN_ANCHORS[(index + 1) % CROWN_ANCHORS.length].angle,
      })),
    [],
  );

  useFrame((_, delta) => {
    if (!crownRef.current) return;

    crownRef.current.rotation.y += delta * 0.26;
  });

  return (
    <Float speed={1.15} rotationIntensity={0.12} floatIntensity={0.44}>
      <group
        ref={crownRef}
        position={[0, -0.08, 0]}
        rotation={[-0.1, -0.34, 0]}
        scale={0.96}
      >
        <mesh position={[0, BAND_CENTER_Y, 0]} castShadow receiveShadow>
          <cylinderGeometry
            args={[RING_RADIUS * 0.96, RING_RADIUS * 1.1, BAND_HEIGHT, 128, 1, true]}
          />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.96}
            roughness={0.16}
            emissive="#4f3300"
            emissiveIntensity={0.12}
            side={DoubleSide}
          />
        </mesh>

        <mesh position={[0, BAND_TOP_Y, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[RING_RADIUS, 0.07, 24, 128]} />
          <meshStandardMaterial color="#ffe27a" metalness={0.98} roughness={0.08} />
        </mesh>

        <mesh position={[0, -0.96, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[RING_RADIUS * 1.07, 0.12, 28, 128]} />
          <meshStandardMaterial
            color="#8a5a08"
            metalness={0.9}
            roughness={0.22}
            emissive="#241400"
            emissiveIntensity={0.08}
          />
        </mesh>

        <mesh position={[0, -0.75, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[RING_RADIUS * 1.03, 0.035, 18, 128]} />
          <meshStandardMaterial color="#ffe27a" metalness={0.98} roughness={0.08} />
        </mesh>

        {CROWN_ANCHORS.map((anchor) => (
          <CrownPoint anchor={anchor} key={anchor.angle} />
        ))}

        {swagPairs.map((pair) => (
          <CrownSwag endAngle={pair.end} key={pair.start} startAngle={pair.start} />
        ))}

        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle) => (
          <CrownGem angle={angle} key={angle} y={-0.56} />
        ))}

        {[Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4].map(
          (angle) => <CrownGem angle={angle} key={angle} size={0.12} y={-0.72} />,
        )}
      </group>
    </Float>
  );
}

export function KingdomScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} shadows>
      <color attach="background" args={["#05060a"]} />

      <ambientLight intensity={0.82} />
      <directionalLight position={[4, 5, 5]} intensity={2.8} />
      <directionalLight position={[-3, 2, -4]} intensity={1.6} color="#d4af37" />
      <pointLight position={[-4, -2, 3]} intensity={2.4} color="#38bdf8" />
      <pointLight position={[3, -3, 2]} intensity={2.2} color="#d4af37" />

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
