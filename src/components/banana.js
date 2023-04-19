import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Banana() {
  const model = useLoader(GLTFLoader, "./banana.glb");
  console.log(model);
  return <primitive object={model.scene} scale={0.002} />;
}

export { Banana };
