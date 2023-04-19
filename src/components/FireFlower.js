import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function FireFlower() {
  const model = useLoader(GLTFLoader, "./fireFlower.glb");
  console.log(model);
  return <primitive object={model.scene} scale={0.2} />;
}

export { FireFlower };
