import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
} from "@react-three/drei";
import "./style2.css";
import { Arcade } from "./components/Arcade";
import { Screen } from "./components/Screen";

export default function EnterPage() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 2, 1.9],
      }}
      //   camera={{
      //     fov: 45,
      //     near: 0.1,
      //     far: 200,
      //     position: [-4, 3, 6],
      //   }}
    >
      <color attach="background" args={["hotpink"]} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr" />
      <ambientLight color="pink" intensity={1} />
      <OrbitControls makeDefault />

      <mesh
        receiveShadow
        position-y={-2}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <AccumulativeShadows
          temporal
          frames={100}
          scale={20}
          alphaTest={0.85}
          color="hotpink"
          colorBlend={2}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </mesh>

      <Arcade />
      <Screen />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <Suspense fallback={null}>
        {/* <ScrollBasedAnimation /> */}
        {/* <Background /> */}
      </Suspense>
    </Canvas>
  );
}
