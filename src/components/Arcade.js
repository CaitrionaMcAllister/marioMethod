import { useLoader, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useSpring } from "react-spring";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { TransformControls } from "@react-three/drei";
import * as THREE from "three";

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function Arcade({ entered, cameraPosition, onDone = () => false }) {
  const model = useLoader(GLTFLoader, "./arcade.glb");
  // console.log(model);

  const { camera } = useThree();
  // eslint-disable-next-line
  const [spring, setSpring] = useSpring(() => ({ x: 0, y: 0, z: 0 }));

  const handleMove = (position) => {
    // eslint-disable-next-line
    let start = { ...cameraPosition };
    let current = { ...cameraPosition };
    let finish = { ...position };

    const speed = 0.01;
    const finishThreshold = 0.5;

    const update = () => {
      current.x = lerp(current.x, finish.x, speed);
      current.y = lerp(current.y, finish.y, speed);
      current.z = lerp(current.z, finish.z, speed);

      //opacity lerp

      camera.position.set(current.x, current.y, current.z);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      if (
        Math.abs(current.x - finish.x) < finishThreshold &&
        Math.abs(current.y - finish.y) < finishThreshold &&
        Math.abs(current.z - finish.z) < finishThreshold
      ) {
        onDone();
      } else {
        requestAnimationFrame(update);
      }
    };

    update();
  };

  useEffect(() => {
    if (entered) {
      // destination
      handleMove({
        x: -0.3,
        y: 0.5,
        z: 0.5,
      });
    }
    // eslint-disable-next-line
  }, [entered]);

  return (
    <primitive
      object={model.scene}
      scale={2}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export { Arcade };
