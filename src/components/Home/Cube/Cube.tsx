
"use client"

import { Canvas } from "@react-three/fiber";

 function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

export default function Home() {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
}
