import { useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
// import { Ground } from "./src/Ground.js";
import * as THREE from "three";
import { RigidBody, Physics } from "@react-three/rapier";
// import { Banana } from "../components/banana";
import { Cliff } from "../components/cliff";
import { Pipe } from "../components/pipe";

// import { Ground } from "/Users/caitrionamcallister/Documents/ualFinalYear/term2/BotanicalBreakthroughs/websiteCode/botanical_breakthroughs/src/components/Ground.js";

function Page4() {
  <ambientLight color="white" intensity={10} />;
  const { height, width } = useThree((state) => state.viewport);
  return (
    <>
      <Physics>
        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <Item color="darkgreen" position={[width / 6, -height * 3.5, 0]}>
            <boxGeometry args={[20, 5, 2]} />
          </Item>
          <Item color="blue" position={[width / 6, -height * 3.6, 0]}>
            <boxGeometry args={[20, 5, 9]} />
          </Item>
          <Item position={[width / 6, -height * 2.95, 0]}>
            {/* <Banana /> */}
          </Item>
        </RigidBody>

        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <Item color="green" position={[width / 3, -height * 3.2, -1.5]}>
            <Cliff />
          </Item>
          <Item color="green" position={[-width / 3, -height * 2.8, -1]}>
            <Pipe />
          </Item>
        </RigidBody>

        {/* <RigidBody> */}
        <Item color="red" position={[width / 6, -height * 2.5, 0]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
        </Item>
        {/* </RigidBody> */}
      </Physics>
    </>
  );
}

function Item({ color, position, children }) {
  const visible = useRef();
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  // eslint-disable-next-line
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
    []
  );
  useFrame(({ clock }, delta) => {
    // eslint-disable-next-line
    const elapsedTime = clock.getElapsedTime();
    // ref.current.rotation.x = elapsedTime * xRandomFactor;
    // ref.current.rotation.y = elapsedTime * yRandomFactor;
    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      0,
      delta
    );
    ref.current.scale.set(scale, scale, scale);
  });
  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
  );
}

export { Page4 };
