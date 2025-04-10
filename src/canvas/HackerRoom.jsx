import React from "react";
import {useGLTF} from '@react-three/drei';



const hackerRoom = (props) => {
const {scene} = useGLTF('/hacker_room.glb');

  return (
   <primitive object={scene} {...props} />
  )
}

export default hackerRoom
