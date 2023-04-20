import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function CheepCheep() {
  const model = useLoader(GLTFLoader, "./cheepCheep.glb");
  //   console.log(model);
  return (
    <primitive object={model.scene} scale={0.0009} position={[0, -25, 1]} />
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
