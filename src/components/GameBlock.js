import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function GameBlock() {
  const model = useLoader(GLTFLoader, "./gameBlock.glb");
  // console.log(model);
  return <primitive object={model.scene} scale={0.07} />;
}

export { GameBlock };
