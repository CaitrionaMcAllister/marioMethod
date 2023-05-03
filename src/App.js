import "./style.css";
import { Canvas } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Sparkles,
  CameraShake,
} from "@react-three/drei";
import React, { Suspense, useState } from "react";
import { HtmlOverlay } from "./components/Html";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Page4 } from "./pages/page4";
import { Background } from "./components/Background";
import { Overlay } from "./Overlay.js";
import EnterPage from "./Enter.js";

function ScrollBasedAnimation({ counter, setCounter }) {
  return (
    <ScrollControls damping={4} pages={4}>
      <Scroll>
        <Page1 counter={counter} setCounter={setCounter} />
        <Page2 counter={counter} setCounter={setCounter} />
        <Page3 counter={counter} setCounter={setCounter} />
        <Page4 counter={counter} setCounter={setCounter} />
      </Scroll>
      <Scroll html>
        <HtmlOverlay counter={counter} setCounter={setCounter} />
      </Scroll>
    </ScrollControls>
  );
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [entered, setEntered] = useState(false);
  const [displayed, setDisplayed] = useState(true);

  return (
    <>
      {displayed && (
        <EnterPage
          entered={entered}
          setEntered={setEntered}
          setDisplayed={setDisplayed}
        />
      )}
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
          <ScrollBasedAnimation setCounter={setCounter2} counter={counter2} />
          <Background />
        </Suspense>
      </Canvas>
      <Overlay counter1={counter} counter2={counter2} />
    </>
  );
}
