import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

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
      <Suspense fallback={null}>
        <ScrollBasedAnimation />
        <Background />
      </Suspense>
    </Canvas>
  );
}
