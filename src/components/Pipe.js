import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Pipe() {
  const pipe1 = useLoader(GLTFLoader, "./pipe.glb");
  const pipe2 = useLoader(GLTFLoader, "./pipe.glb");

  // console.log(model);
  return (
    <primitive
      object={pipe1.scene}
      scale={3}
      rotation={[124, 0, 0]}
      position={[3, -22, -1.5]}
    />
  );
}

export { Pipe };

// function Pipes(props) {
//   const { nodes, materials } = useGLTF("/eye/scene.gltf");
//   return (
//     <group
//       {...props}
//       dispose={null}
//       rotation={[Math.PI, 0, -Math.PI / 2]}
//       scale={[1, 1, 1]}
//     >
//       <mesh
//         geometry={nodes.Sphere001_Eye_0.geometry}
//         material={materials.material}
//       />
//     </group>
//   );
// }
// useGLTF.preload("/eye/scene.gltf");
