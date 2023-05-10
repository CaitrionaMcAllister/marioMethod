import { Canvas, useLoader } from "@react-three/fiber";
// import { useState, useRef, useEffect } from "react";
// import { Text, CameraShake } from "@react-three/drei";
import "./style.css";
import { Arcade } from "./components/Arcade";
// import { Screen } from "./components/Screen2";
// import { useSpring, animated } from "@react-spring/web";
import * as THREE from "three";
import img from "./components/screen.png";

// eslint-disable-next-line
function Image() {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh>
      <planeBufferGeometry
        attach="geometry"
        args={[1, 2]}
        position={[0, 0, 3]}
      />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  );
}

export default function EnterPage({ entered, setEntered, setDisplayed }) {
  // eslint-disable-next-line
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
        {/* <Image position={[1.2, 0, 0]} /> */}
        <Arcade
          onDone={() => setDisplayed(false)}
          entered={entered}
          cameraPosition={defaultCameraPosition}
        />
        {/* <Screen position={[0, 0, 0]} /> */}
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
