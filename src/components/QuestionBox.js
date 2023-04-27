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
  // const { setCounter, counter } = props;
  const { setCounter, counter } = props;
  const model = useLoader(GLTFLoader, "./questionBlock.glb");
  // console.log(model);
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const [clicked, click] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (counter && setCounter) setCounter(counter + 1);
  };

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
          // onClick={(event) => click(!clicked)}
          onClick={() => handleClick()}
        >
          <primitive
            object={model.scene}
            scale={3}
            // onClick={(event) => {
            //   console.log("count", count);
            //   setCount(count + 1);
            //   event.stopPropagation();
            // }}
          />

          <meshStandardMaterial color="orange" />
        </mesh>
      </Select>
    </Selection>
  );
}

export { QuestionBox };
