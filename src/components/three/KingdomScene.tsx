import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { ExtrudeGeometry, Shape, type Group } from "three";

type Point2D = [number, number];

const LOGO_DEPTH = 0.22;
const LOGO_BEVEL_SIZE = 0.045;
const LOGO_BEVEL_THICKNESS = 0.04;

const EXTRUDE_SETTINGS = {
  depth: LOGO_DEPTH,
  bevelEnabled: true,
  bevelSegments: 3,
  bevelSize: LOGO_BEVEL_SIZE,
  bevelThickness: LOGO_BEVEL_THICKNESS,
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

function useRoyalLogoGeometries() {
  return useMemo(
    () => ({
      crown: createExtrudedShape([
        [-1.55, 1.12],
        [-1.23, 1.86],
        [-0.54, 1.36],
        [0, 2.12],
        [0.54, 1.36],
        [1.23, 1.86],
        [1.55, 1.12],
        [1.34, 0.92],
        [-1.34, 0.92],
      ]),
      crownBase: createExtrudedShape([
        [-1.38, 0.88],
        [1.38, 0.88],
        [1.25, 0.66],
        [-1.25, 0.66],
      ]),
      leftPillar: createExtrudedShape([
        [-1.08, 0.52],
        [-0.74, 0.52],
        [-0.74, -1.24],
        [-0.94, -1.42],
        [-1.08, -1.26],
      ]),
      centerPillar: createExtrudedShape([
        [-0.58, 0.52],
        [-0.24, 0.52],
        [-0.24, -1.42],
        [-0.4, -1.6],
        [-0.58, -1.42],
      ]),
      upperK: createExtrudedShape([
        [-0.08, 0.18],
        [0.76, 0.56],
        [1.02, 0.44],
        [0.18, -0.2],
      ]),
      lowerK: createExtrudedShape([
        [-0.03, -0.36],
        [0.76, -1.22],
        [1.04, -1.08],
        [0.2, -0.12],
      ]),
      rightUpperChevron: createExtrudedShape([
        [0.86, 0.12],
        [1.32, 0.42],
        [1.54, 0.3],
        [1.05, -0.08],
      ]),
      rightLowerChevron: createExtrudedShape([
        [0.84, -0.42],
        [1.34, -0.84],
        [1.56, -0.7],
        [1.05, -0.2],
      ]),
      lowerShard: createExtrudedShape([
        [-0.05, -1.2],
        [0.38, -1.68],
        [0.02, -1.86],
      ]),
    }),
    [],
  );
}

function RoyalLogoMark() {
  const logoRef = useRef<Group>(null);
  const geometries = useRoyalLogoGeometries();

  useFrame((_, delta) => {
    if (!logoRef.current) return;

    logoRef.current.rotation.y += delta * 0.32;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.58}>
      <group
        ref={logoRef}
        position={[0, -0.08, 0]}
        rotation={[-0.08, -0.28, 0]}
        scale={1.12}
      >
        {Object.entries(geometries).map(([name, geometry], index) => (
          <mesh
            geometry={geometry}
            key={name}
            position={[0, 0, index * 0.006]}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color="#d4af37"
              metalness={0.92}
              roughness={0.18}
              emissive="#5f3f00"
              emissiveIntensity={0.18}
            />
          </mesh>
        ))}
      </group>
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

      <RoyalLogoMark />

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
