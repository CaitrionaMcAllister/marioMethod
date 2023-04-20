import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Pipe() {
  const model = useLoader(GLTFLoader, "./pipe.glb");
  // console.log(model);
  return <primitive object={model.scene} scale={3} rotation={[124, 0, 0]} />;
}

export { Pipe };
