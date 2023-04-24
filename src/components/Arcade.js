import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Arcade() {
  const model = useLoader(GLTFLoader, "./arcade.glb");
  // console.log(model);
  return (
    <primitive
      object={model.scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export { Arcade };
