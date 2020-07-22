import React from 'react'

export default function Plane({ ...props }) {
   return (
     <mesh {...props} receiveShadow>
       <planeGeometry attach="geometry" args={[5000, 5000, 1, 1]} />
       <meshLambertMaterial attach="material" color="#9b9b9b" transparent opacity={0.2} />
     </mesh>
   )
 }
 