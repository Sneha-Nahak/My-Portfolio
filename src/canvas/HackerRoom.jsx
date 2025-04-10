import React from "react";
import {useGLTF} from '@react-three/drei';



const hackerRoom = (props) => {
const {scene} = useGLTF('../public/model/hacker_room_-_stylized.glb');

  return (
   <primitive object={scene} {...props} />
  )
}

export default hackerRoom
