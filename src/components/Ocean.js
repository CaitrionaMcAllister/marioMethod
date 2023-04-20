import React from "react";
import { useRef } from "react";

function Ocean(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref} scale={1}>
      <boxGeometry args={[20, 5, 9]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

export { Ocean };
