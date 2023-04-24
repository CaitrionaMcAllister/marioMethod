import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import "./style2.css";
import { Arcade } from "./components/Arcade";

export default function EnterPage() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight color="pink" intensity={1} />

      <OrbitControls makeDefault />
      <mesh
        receiveShadow
        position-y={-2}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <Arcade />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <Suspense fallback={null}>
        {/* <ScrollBasedAnimation /> */}
        {/* <Background /> */}
      </Suspense>
    </Canvas>
  );
}
