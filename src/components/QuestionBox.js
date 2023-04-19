import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

function QuestionBox(props) {
  const model = useLoader(GLTFLoader, "./questionBlock.glb");
  console.log(model);
  const ref = useRef();
  const [hovered, hover] = useState(null);
  console.log(hovered);
  useFrame(
    (state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta)
  );
  return (
    <Selection>
      <Select enabled={hovered}>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor="white"
            edgeStrength={100}
            width={500}
          />
        </EffectComposer>
        <mesh
          ref={ref}
          {...props}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          <primitive object={model.scene} scale={2} />

          <meshStandardMaterial color="orange" />
        </mesh>
      </Select>
    </Selection>
  );
}

export { QuestionBox };

// export default function App() {
//   return (
//     <Canvas dpr={[1, 2]}>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       <Selection>
//         <EffectComposer multisampling={8} autoClear={false}>
//           <Outline
//             blur
//             visibleEdgeColor="white"
//             edgeStrength={100}
//             width={500}
//           />
//         </EffectComposer>
//         <Box position={[-1, 0, 0]} />
//         <Box position={[1, 0, 0]} />
//       </Selection>
//     </Canvas>
//   );
// }
