import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Clone, useGLTF } from "@react-three/drei";

function CheepCheep() {
  const fish = useGLTF("./cheepCheep.glb");

  return (
    <>
      <Clone
        object={fish.scene}
        scale={0.0009}
        rotation={[124, 0, 0]}
        position={[0, -25, 1]}
      />
    </>
  );
}

function Fish() {
  const ref = useRef();
  useFrame(() => (ref.current.position.x += -Math.sin(3.14)));
  // -0.005 *
  return (
    <group ref={ref}>
      <CheepCheep position={[1, 1, 1]} />
      {/* <CheepCheep position={[1, 3, 1]} />
      <CheepCheep position={[2, 0, 1]} /> */}
    </group>
  );
}

export { Fish };
