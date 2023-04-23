import React from "react";
import { useRef } from "react";
// import { Suspense } from "react";
// import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import { useTexture } from "@react-three/drei";

function Grass(props) {
  // const colorMap = useLoader(TextureLoader, "PavingStones092_1K_Color.jpg");
  // const material = useTexture({
  //   map: "PavingStones092_1K_Color.jpg",
  //   displacementMap: "PavingStones092_1K_Displacement.jpg",
  //   normalMap: "PavingStones092_1K_Normal.jpg",
  //   roughnessMap: "PavingStones092_1K_Roughness.jpg",
  //   aoMap: "PavingStones092_1K_AmbientOcclusion.jpg",
  // });
  const ref = useRef();

  return (
    <mesh {...props} ref={ref} scale={1}>
      <boxGeometry args={[20, 5, 1]} />
      {/* <meshStandardMaterial {...material} /> */}
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

export { Grass };
