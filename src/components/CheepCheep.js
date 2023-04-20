import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Fish() {
  const model = useLoader(GLTFLoader, "./cheepCheep.glb");
  //   console.log(model);
  return (
    <primitive object={model.scene} scale={0.0009} position={[0, -25.5, 1]} />
  );
}

export { Fish };
