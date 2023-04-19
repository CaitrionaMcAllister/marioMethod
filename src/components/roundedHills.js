import React from "react";
import { RoundedBox } from "@react-three/drei";

function Hills() {
  <boxGeometry args={[5, 20, 2]} />;
  <RoundedBox args={[3, 3, 0.25]} radius={0.1}>
    <meshLambertMaterial attach="material" color={"grey"} />
  </RoundedBox>;
  // return<primitive object={model.scene} scale={0.07} />;
}

export { Hills };
