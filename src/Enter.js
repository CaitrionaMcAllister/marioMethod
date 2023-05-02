import { Canvas, useThree } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Text } from "@react-three/drei";
import "./style.css";
import { Arcade } from "./components/Arcade";
import { Screen } from "./components/Screen";
import { useSpring } from "@react-spring/web";

function EnterButton() {
  return (
    <>
      <Text
        font="./fonts/super-mario-bros-font/SuperMarioBros-ov7d.ttf"
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

      <button type="button">ENTER!</button>
    </>
  );
}

// function CameraControls() {
//   const { camera } = useThree();

//   const handleClick = (position) => {
//     const from = camera.position.clone();
//     const to = position.clone();
//     const dir = to.clone().sub(from);
//     const distance = dir.length();

//     // Set camera's target
//     camera.lookAt(position);

//     // Animate camera position
//     const springConfig = { mass: 1, tension: 400, friction: 30 };
//     const spring = useSpring({
//       from: { value: 0 },
//       to: { value: distance },
//       config: springConfig,
//       onFrame: ({ value }) => {
//         const pos = from
//           .clone()
//           .add(dir.clone().normalize().multiplyScalar(value));
//         camera.position.set(pos.x, pos.y, pos.z);
//       },
//     });
//   };

//   return (
//     <>
//       <button onClick={() => handleClick([3, 3, 3])}>Move to Position 1</button>
//       <button onClick={() => handleClick([-3, 3, 3])}>
//         Move to Position 2
//       </button>
//     </>
//   );
// }

export default function EnterPage({ entered, setEntered }) {
  const display = entered ? "none" : "block";
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{
          fov: 20,
          near: 0.1,
          far: 200,
          position: [3, 4, 6],
        }}
        style={{
          display: display,
        }}
        onClick={() => {
          setEntered(true);
        }}
      >
        <color attach="background" args={["blue"]} />
        <ambientLight color="pink" intensity={1} />
        {/* <OrbitControls makeDefault /> */}
        <Arcade />
        <Screen />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        {/* <Suspense fallback={null}></Suspense> */}
      </Canvas>
    </>
  );
}
