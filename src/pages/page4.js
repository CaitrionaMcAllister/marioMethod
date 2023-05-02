import React from "react";
import { RigidBody, Physics } from "@react-three/rapier";
import { Pipe } from "../components/Pipe";
import { Hills } from "../components/RoundedHills";
import { Ocean } from "../components/Ocean";
import { Grass } from "../components/Grass";
import { Fish } from "../components/CheepCheep";

function Page4() {
  <ambientLight color="white" intensity={10} />;
  return (
    <>
      <Physics>
        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <Hills />
          <Ocean color="blue" position={[0, -27, 0]} />
          <Pipe />
          <Grass color="green" position={[0, -25.5, -1]} />
          <Fish />
        </RigidBody>
      </Physics>
    </>
  );
}

export { Page4 };
