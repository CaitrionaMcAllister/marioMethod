import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function TreeTrunk() {
  const model = useLoader(GLTFLoader, "./treeTrunk.glb");
  // console.log(model);
  return <primitive object={model.scene} scale={10} />;
}

export { TreeTrunk };
