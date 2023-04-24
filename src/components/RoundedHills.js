import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import React from "react";

function Hills(props) {
  const ref = useRef();
  return (
    <mesh {...props} ref={ref} scale={1}>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-25, -29, -8]}>
        <meshStandardMaterial color={"pink"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-23, -30, -5]}>
        <meshStandardMaterial color={"orange"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-20, -27, -9]}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-16, -27, -8]}>
        <meshStandardMaterial color={"red"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-11, -28, -6]}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-9, -29, -8]}>
        <meshStandardMaterial color={"red"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-7, -30, -5]}>
        <meshStandardMaterial color={"orange"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-5, -25, -6]}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-3, -30, -8]}>
        <meshStandardMaterial color={"pink"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[-1, -30, -5]}>
        <meshStandardMaterial color={"orange"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[0, -29, -7]}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[3, -27, -8]}>
        <meshStandardMaterial color={"lightpink"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[6, -26, -9]}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[9, -29, -8]}>
        <meshStandardMaterial color={"red"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[10, -30, -5]}>
        <meshStandardMaterial color={"orange"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[11, -25, -7]}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[16, -27, -8]}>
        <meshStandardMaterial color={"red"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[20, -25, -5]}>
        <meshStandardMaterial color={"yellow"} />
      </RoundedBox>
      <RoundedBox args={[3, 15, 3]} radius={1.5} position={[18, -29, -7]}>
        <meshStandardMaterial color={"pink"} />
      </RoundedBox>
      ;
    </mesh>
  );
}

export { Hills };
