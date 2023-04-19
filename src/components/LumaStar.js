import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function LumaStar() {
  const model = useLoader(GLTFLoader, "./lumaStar.glb");
  console.log(model);
  return <primitive object={model.scene} scale={3} rotation={[124, 0, 0]} />;
}

export { LumaStar };
