import { useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
// import { Ground } from "./src/Ground.js";
import * as THREE from "three";
// import { BlobGeometry } from "/Users/caitrionamcallister/Documents/ualFinalYear/term2/BotanicalBreakthroughs/websiteCode/botanical_breakthroughs/src/BlobGeometry.js";

function Page1() {
  const { height } = useThree((state) => state.viewport);
  return (
    <>
      <pointLight color="#191970" position={[8, -25, 5]} intensity={100} />
      <pointLight
        color="#191970"
        position={[0, -height * 2.25, 5]}
        intensity={20}
      />
      <Item color="green" position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
      </Item>
    </>
  );
}

function Item({ color, position, children }) {
  const visible = useRef();
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  // eslint-disable-next-line
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
    []
  );
  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.rotation.x = elapsedTime * xRandomFactor;
    ref.current.rotation.y = elapsedTime * yRandomFactor;
    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      5,
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

export { Page1 };
