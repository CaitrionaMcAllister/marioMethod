import { useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { GameBlock } from "../components/gameBlock";

function Page3() {
  const { height, width } = useThree((state) => state.viewport);
  return (
    <>
      <Item color="green" position={[-width / 5, -height * 2, -2]}>
        <GameBlock />
      </Item>
    </>
  );
}

function Item({ color, position, children }) {
  const visible = useRef();
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const [yRandomFactor] = useMemo(
    () => [(0.3 - Math.random()) * 0.3, (0.3 - Math.random()) * 0.3],
    []
  );
  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime();
    // ref.current.rotation.x = elapsedTime * xRandomFactor;
    ref.current.rotation.y = elapsedTime * yRandomFactor;
    const scale = THREE.MathUtils.damp(
      ref.current.scale.z,
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

export { Page3 };
