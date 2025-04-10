import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import HackerRoom from "./HackerRoom.jsx";
import "../index.css"; // Make sure to import styles if you haven't already

const Scene = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="r3f-scene"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="scene-tooltip">
         <h2 style={{color:'#05cb10'}}>Wanna interact with me? </h2> <br />
          Please hold your mouse, <br />Move around <br />And see the magic!🪄🔮🌟
        </div>
      )}

      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 2]} intensity={1} />
        <HackerRoom
          scale={0.011}
          position={[0, -0.5, 0]}
          rotation={[0, Math.PI, 0]}
        />
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Scene;
