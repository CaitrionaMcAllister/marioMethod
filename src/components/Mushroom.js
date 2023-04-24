import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Mushroom() {
  // const [hover] = useState(false);
  const [clicked, click] = useState(false);

  const model = useLoader(GLTFLoader, "./mushroom.glb");
  // console.log(model);
  return (
    <primitive
      object={model.scene}
      scale={clicked ? 10 : 5}
      onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    />
  );
}

export { Mushroom };
