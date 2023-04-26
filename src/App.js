import "./style.css";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import { Html } from "./components/Html";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Page4 } from "./pages/page4";
import { Background } from "./components/Background";

function ScrollBasedAnimation() {
  return (
    <ScrollControls damping={4} pages={4}>
      <Scroll>
        <Page1 />/
        <Page2 />
        <Page3 />
        <Page4 />
      </Scroll>
      <Scroll html>
        <Html />
        {/* <CoinCounter clickersCount={1} /> */}
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
