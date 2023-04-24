import { Clone, useGLTF } from "@react-three/drei";
import React from "react";

function Pipe() {
  const pipe1 = useGLTF("./pipe.glb");
  // const pipe2 = useLoader(GLTFLoader, "./pipe.glb");

  // console.log(model);
  return (
    <>
      <Clone
        object={pipe1.scene}
        scale={3}
        rotation={[124, 0, 0]}
        position={[-13, -22, -2.7]}
      />
      <Clone
        object={pipe1.scene}
        scale={3}
        rotation={[124, 0, 0]}
        position={[-6, -22, -2.7]}
      />
      <Clone
        object={pipe1.scene}
        scale={3}
        rotation={[124, 0, 0]}
        position={[-3, -22, -5]}
      />
      <Clone
        object={pipe1.scene}
        scale={3}
        rotation={[124, 0, 0]}
        position={[10, -22, -5]}
      />
      <Clone
        object={pipe1.scene}
        scale={3}
        rotation={[124, 0, 0]}
        position={[3, -22, -2.7]}
      />
      <Clone
        object={pipe1.scene}
        scale={3}
        rotation={[124, 0, 0]}
        position={[14, -22, -2.7]}
      />
    </>
  );
}

export { Pipe };
