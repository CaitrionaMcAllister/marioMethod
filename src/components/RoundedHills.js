import { RoundedBox } from "@react-three/drei";
import React from "react";
import { useThree } from "@react-three/fiber";

function Hills(props) {
  const { height, width } = useThree((state) => state.viewport);
  <RoundedBox
    args={[3, 9, 2]}
    radius={1.5}
    position={[width / 3, -height * 3.2, -1.5]}
  >
    <meshLambertMaterial attach="material" color={"yellow"} />
  </RoundedBox>;
}

export { Hills };
