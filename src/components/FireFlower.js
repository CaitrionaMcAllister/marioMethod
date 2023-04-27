import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function FireFlower() {
  const [clicked, click] = useState(false);
  const model = useLoader(GLTFLoader, "./fireFlower.glb");
  return (
    <primitive
      object={model.scene}
      scale={clicked ? 0.2 : 0.3}
      onClick={(event) => click(!clicked)}
    />
  );
}

export { FireFlower };
