import React from 'react'
import * as THREE from 'three'
import { Canvas, useResource } from 'react-three-fiber'
import Controls from "./3D/OrbitControls"
import Plane from "./3D/Plane"
import Box from "./3D/Box"
import './App.css';

const Light = () => {
  //Create a PointLight and turn on shadows for the light
  const light = new THREE.DirectionalLight(0xffffff, 1, 100)
  light.position.set(0, 10, 0)
  light.castShadow = true // default false
  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512 // default
  light.shadow.mapSize.height = 512 // default
  light.shadow.camera.near = 0.5 // default
  light.shadow.camera.far = 500 // default
  return <primitive object={light} />}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Sandbox
      </header>
      <Canvas 
        className='canvas'
        shadowMap={true}>
        <ambientLight intensity={0.6} position={[0,10,5]} />
        <spotLight position={[0, 4, 2]} lookAt={[0,-19,0]} castShadow={true} intensity={1}  />
        <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -2, 0]} />
        <Box receiveShadow castShadow position={[0, 0, 0]} scale={[2,2,2]}/>
        <Controls />
        <Light />
      </Canvas>
    </div>
  );
}

export default App;
