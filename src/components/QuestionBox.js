import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function QuestionBox() {
  const model = useLoader(GLTFLoader, "./questionBlock.glb");
  console.log(model);
  return <primitive object={model.scene} scale={2} />;
}

export { QuestionBox };
