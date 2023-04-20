import React from "react";
import { useRef } from "react";

function Grass(props) {
  const ref = useRef();

  return (
    <mesh {...props} ref={ref} scale={1}>
      <boxGeometry args={[20, 5, 1]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

export { Grass };
