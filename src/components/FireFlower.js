import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function FireFlower() {
  const [hover] = useState(false);
  const [clicked, click] = useState(false);
  const model = useLoader(GLTFLoader, "./fireFlower.glb");
  // console.log(model);
  return (
    <primitive
      object={model.scene}
      scale={clicked ? 0.2 : 0.3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    />
  );
}

export { FireFlower };
