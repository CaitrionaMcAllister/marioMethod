import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Banana() {
  const [hover] = useState(false);
  const [clicked, click] = useState(false);

  const model = useLoader(GLTFLoader, "./banana.glb");
  // console.log(model);
  return (
    <primitive
      object={model.scene}
      scale={clicked ? 0.002 : 0.001}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    />
  );
}

export { Banana };
