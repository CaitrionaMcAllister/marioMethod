import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Coin() {
  const model = useLoader(GLTFLoader, "./coin.glb");
  // console.log(model);
  return (
    <primitive
      object={model.scene}
      scale={0.5}
      position={[0, 3, 0]}
      rotation={[0, 30, 0]}
    />
  );
}

export { Coin };
