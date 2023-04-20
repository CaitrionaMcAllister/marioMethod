import { useIntersect, RoundedBox } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { RigidBody, Physics } from "@react-three/rapier";
import { Cliff } from "../components/Cliff";
import { Pipe } from "../components/Pipe";
import { Hills } from "../components/RoundedHills";

function Page4() {
  <ambientLight color="white" intensity={10} />;
  const { height, width } = useThree((state) => state.viewport);
  return (
    <>
      <Physics>
        <RigidBody type="fixed" restitution={0} friction={0.7}>
          console.log(height);
          <boxGeometry
            args={[20, 5, 2]}
            color="darkgreen"
            position={[width / 6, -height * 3.5, 0]}
          />
          <boxGeometry
            args={[20, 5, 9]}
            color="blue"
            position={[width / 6, -height * 3.6, 0]}
          />
          {/* <Banana position={[width / 6, -height * 2.95, 0]}/> */}
          <RoundedBox
            args={[3, 9, 2]}
            radius={1.5}
            position={[width / 3, -height * 3.2, -1.5]}
          >
            <meshLambertMaterial attach="material" color={"yellow"} />
          </RoundedBox>
          <Cliff color="green" position={[width / 3, -height * 3.4, -1.5]} />
          <Hills color="green" position={[-width / 3, -height * 2.8, -1]} />
          <Pipe position={[-width / 3, -height * 2, -1]} />
          <boxGeometry
            args={[0.1, 0.1, 0.1]}
            color="red"
            position={[width / 6, -height * 2.5, 0]}
          />
        </RigidBody>
      </Physics>
    </>
  );
}

// function Item({ color, position, children }) {
//   const visible = useRef();
//   const ref = useIntersect((isVisible) => (visible.current = isVisible));
//   // eslint-disable-next-line
//   const [xRandomFactor, yRandomFactor] = useMemo(
//     () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
//     []
//   );
//   useFrame(({ clock }, delta) => {
//     // eslint-disable-next-line
//     const elapsedTime = clock.getElapsedTime();
//     // ref.current.rotation.x = elapsedTime * xRandomFactor;
//     // ref.current.rotation.y = elapsedTime * yRandomFactor;
//     const scale = THREE.MathUtils.damp(
//       ref.current.scale.x,
//       visible.current ? 1.5 : 0.2,
//       0,
//       delta
//     );
//     ref.current.scale.set(scale, scale, scale);
//   });
//   return (
//     <mesh ref={ref} position={position}>
//       {children}
//       <meshPhysicalMaterial transparent color={color} />
//     </mesh>
//   );
// }

export { Page4 };
