// import logo from "./logo.svg";
// import CustomObject from "./CustomObject.js";
// import { useThree, extend, useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import { Particles } from "./components/Particles";
// import { BlobGeometry } from "./BlobGeometry";
// import { button, useControls } from 'leva'
// import { MathUtils } from "three";
// import { Ground } from "./Ground";
// import { Grass } from "./Grass";
// import { Butterfly } from "./Butterfly";
// import { Particles } from './Particles'

// const rand = new Array(15).fill(0).map(() => ({
//   position: [
//     MathUtils.randFloat(0.5, 0.7),
//     MathUtils.randFloat(0.5, 0.7),
//     MathUtils.randFloat(0.5, 0.7),
//   ],
//   scale: MathUtils.randFloat(0.5, 1),
// }));

import "./style.css";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import { Html } from "./components/Html";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Page4 } from "./pages/page4";
import { Background } from "./Background";

function ScrollBasedAnimation() {
  // useFrame(({ mouse, camera }) => {
  //   camera.position.x = THREE.MathUtils.lerp(
  //     camera.position.x,
  //     mouse.x * 0.5,
  //     0.03
  //   );
  //   camera.position.y = THREE.MathUtils.lerp(
  //     camera.position.y,
  //     mouse.y * 0.8,
  //     0.01
  //   );
  //   camera.position.z = THREE.MathUtils.lerp(
  //     camera.position.z,
  //     Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
  //     0.01
  //   );
  //   camera.rotation.y = THREE.MathUtils.lerp(
  //     camera.rotation.y,
  //     mouse.x * -Math.PI * 0.025,
  //     0.001
  //   );
  // });

  return (
    <ScrollControls damping={4} pages={4}>
      <Scroll>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight color="orange" intensity={1} />
      <Suspense fallback={null}>
        <Sparkles
          size={10}
          scale={[10, 10, 10]}
          position-y={1}
          speed={0.2}
          count={40}
        />
        <ScrollBasedAnimation />
        <Background />
      </Suspense>
    </Canvas>
  );
}
