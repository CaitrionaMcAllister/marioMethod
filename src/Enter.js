import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, Float, Text } from "@react-three/drei";
import "./style.css";
import { Arcade } from "./components/Arcade";
import { Screen } from "./components/Screen";

function EnterButton() {
  const [clicked, setClicked] = useState(false);
  <button type="button" onclick="alert('working!')">
    ENTER!
  </button>;
}

export default function EnterPage() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        fov: 20,
        near: 0.1,
        far: 200,
        position: [3, 4, 6],
      }}
    >
      <EnterButton />
      <color attach="background" args={["blue"]} />
      <ambientLight color="pink" intensity={1} />
      {/* <OrbitControls makeDefault /> */}
      <Arcade />
      <Screen />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <Suspense fallback={null}></Suspense>
      {/* {/* <Float speed={3} floatIntensity={1}> */}
      <Text
        // font="./fonts/super-mario-bros-font/SuperMarioBros-ov7d.ttf"
        fontSize={0.5}
        color="red"
        position-y={1}
        position-x={0}
        position-z={1}
        maxWidth={2}
        textAlign="center"
      >
        Enter
      </Text>
      {/* </Float> */}
    </Canvas>
  );
}
