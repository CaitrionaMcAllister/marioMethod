import { useThree } from "@react-three/fiber";
import React from "react";
import { RigidBody, Physics } from "@react-three/rapier";
import { Cliff } from "../components/Cliff";
import { Pipe } from "../components/Pipe";
import { Hills } from "../components/RoundedHills";
import { Ocean } from "../components/Ocean";

function Page4() {
  <ambientLight color="white" intensity={10} />;
  const { height, width } = useThree((state) => state.viewport);
  // console.log(height);
  return (
    <>
      <Physics>
        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <Pipe position={[-width / 3, -height * 2, -1]} />
          <Hills position={[0, -25, -8]} />
          <Cliff color="green" />
          <Ocean color="blue" position={[0, -27, 0]} />
        </RigidBody>
      </Physics>
    </>
  );
}

export { Page4 };
