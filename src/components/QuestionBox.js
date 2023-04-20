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
  // console.log(model);
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
            width={100}
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
