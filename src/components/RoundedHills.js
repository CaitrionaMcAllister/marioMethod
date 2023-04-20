import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import React from "react";

function Hills(props) {
  const ref = useRef();
  return (
    <mesh {...props} ref={ref} scale={1}>
      <RoundedBox args={[3, 9, 2]} radius={1.5}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      ;
    </mesh>
  );
}

export { Hills };
