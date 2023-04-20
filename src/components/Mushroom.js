import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Mushroom() {
  const model = useLoader(GLTFLoader, "./mushroom.glb");
  // console.log(model);
  return <primitive object={model.scene} scale={10} />;
}

export { Mushroom };
