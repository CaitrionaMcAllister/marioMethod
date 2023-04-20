import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Cliff() {
  const model = useLoader(GLTFLoader, "./cliff.glb");
  // console.log(model);
  return <primitive object={model.scene} position={[0, -25, -5]} />;
}

export { Cliff };
