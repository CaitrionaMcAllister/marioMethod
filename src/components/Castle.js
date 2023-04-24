import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Castle() {
  const model = useLoader(GLTFLoader, "./castle.glb");
  // console.log(model);
  return (
    <primitive object={model.scene} scale={0.2} position={[0, -27, -23]} />
  );
}

export { Castle };
