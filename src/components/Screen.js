import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Screen() {
  const model = useLoader(GLTFLoader, "./screen.glb");
  // console.log(model);
  return (
    <primitive
      object={model.scene}
      scale={1.2}
      position={[0, 0.59, 0]}
      rotation={[-0.3, 0, 0]}
    />
  );
}

export { Screen };
