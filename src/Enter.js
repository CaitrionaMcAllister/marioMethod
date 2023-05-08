import { Canvas, useThree } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import { Text, CameraShake } from "@react-three/drei";
import "./style.css";
import { Arcade } from "./components/Arcade";
import { Screen } from "./components/Screen";
import { useSpring, animated } from "@react-spring/web";
import * as THREE from "three";

function EnterButton() {
  return (
    <>
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

export default function EnterPage({ entered, setEntered, setDisplayed }) {
  const display = entered ? "none" : "block";

  const defaultCameraPosition = {
    x: 3,
    y: 5,
    z: 6,
  };

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{
          fov: 20,
          near: 0.1,
          far: 200,
          position: Object.values(defaultCameraPosition),
        }}
        onClick={() => {
          setEntered(true);
        }}
      >
        <color attach="background" args={["blue"]} />
        <ambientLight color="pink" intensity={1} />
        {/* <OrbitControls makeDefault /> */}
        <Arcade
          onDone={() => setDisplayed(false)}
          entered={entered}
          cameraPosition={defaultCameraPosition}
        />
        {/* <Screen /> */}
        {/* <CameraShake
          maxYaw={0.01}
          maxPitch={0.01}
          maxRoll={0.01}
          yawFrequency={0.5}
          pitchFrequency={0.5}
          rollFrequency={0.4}
        /> */}
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        {/* <Suspense fallback={null}></Suspense> */}
      </Canvas>
    </>
  );
}
