import { useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Banana } from "../components/Banana.js";
import { FireFlower } from "../components/FireFlower.js";
import { Mushroom } from "../components/Mushroom.js";

function Page2() {
  const { height, width } = useThree((state) => state.viewport);
  // console.log(height, width);
  return (
    <>
      <Item color="green" position={[width / 2, -height * 0.9, -1]}>
        <Mushroom />
      </Item>
      <Item color="green" position={[width / 6, -height * 1.1, 0]}>
        <Banana />
      </Item>
      <Item color="green" position={[width / 2, -height * 1.3, -1]}>
        <FireFlower />
      </Item>
    </>
  );
}

function Item({ color, position, children }) {
  const visible = useRef();
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.9, (0.5 - Math.random()) * 0.5],
    []
  );
  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.rotation.x = elapsedTime * xRandomFactor;
    ref.current.rotation.y = elapsedTime * yRandomFactor;
    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      0,
      delta
    );
    ref.current.scale.set(scale, scale, scale);
  });
  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
  );
}

export { Page2 };
