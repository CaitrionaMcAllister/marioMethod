import { useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
// import { Ground } from "./src/Ground.js";
import * as THREE from "three";
import { RigidBody, Physics } from "@react-three/rapier";

function Page4() {
  const { height, width } = useThree((state) => state.viewport);
  return (
    <>
      <pointLight color="#191970" position={[8, -25, 5]} intensity={100} />
      <pointLight
        color="#191970"
        position={[0, -height * 2.25, 5]}
        intensity={20}
      />
      <Physics>
        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <Item color="green" position={[width / 6, -height * 3.5, 0]}>
            <boxGeometry args={[20, 5, 2]} />
          </Item>
        </RigidBody>

        <RigidBody>
          <Item color="red" position={[width / 6, -height * 2.5, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
          </Item>
        </RigidBody>
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
      5,
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
