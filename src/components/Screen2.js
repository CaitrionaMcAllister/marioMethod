import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import img from "./screen.png";

function Screen() {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      {/* <primitive scale={0} position={[0, -0.5, 0]} rotation={[0, 0, 0]} /> */}
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  );
}

export { Screen };
