import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import * as THREE from "three";

function CameraControls() {
  const { camera } = useThree();
  const [targetPosition, setTargetPosition] = useState(null);

  const handleMove = (position) => {
    setTargetPosition(position);
  };

  useFrame(() => {
    if (targetPosition) {
      const from = camera.position.clone();
      const to = targetPosition.clone();
      const dir = to.clone().sub(from);
      const distance = dir.length();

      // Set camera's target
      camera.lookAt(targetPosition);

      // Animate camera position
      const springConfig = { mass: 1, tension: 400, friction: 30 };
      const [spring, setSpring] = useSpring(() => ({ value: 0 }));
      spring
        .to({
          value: distance,
          config: springConfig,
          onFrame: ({ value }) => {
            const pos = from
              .clone()
              .add(dir.clone().normalize().multiplyScalar(value));
            camera.position.set(pos.x, pos.y, pos.z);
          },
        })
        .start();

      // Reset target position
      setTargetPosition(null);
    }
  });

  return (
    <>
      <button onClick={() => handleMove(new THREE.Vector3(2, 2, 2))}>
        Move to (2,2,2)
      </button>
    </>
  );
}

function Box() {
  const meshRef = useRef();
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("green");

  const handleClick = () => {
    setClicked(true);
    setColor("blue");
  };

  const handlePointerOver = () => {
    setHovered(true);
    setColor("red");
  };

  const handlePointerOut = () => {
    setHovered(false);
    setColor("green");
  };

  return (
    <mesh
      ref={meshRef}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxBufferGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <CameraControls />
    </Canvas>
  );
}

export default App;
