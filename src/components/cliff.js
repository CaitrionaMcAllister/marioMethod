import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Cliff() {
  const model = useLoader(GLTFLoader, "./cliff.glb");
  console.log(model);
  return <primitive object={model.scene} scale={2} />;
}

export { Cliff };
