import React from "react";
import { useRef } from "react";

function Ocean(props) {
  const ref = useRef();

  return (
    <mesh {...props} ref={ref} scale={1}>
      <boxGeometry args={[20, 5, 1]} />
      <meshPhongMaterial color="#0000ff" opacity={0.5} transparent />
      {/* <meshStandardMaterial color={"blue"} /> */}
    </mesh>
  );
}

export { Ocean };