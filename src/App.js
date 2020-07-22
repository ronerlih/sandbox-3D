import React from 'react'
import { Canvas } from 'react-three-fiber'
import Controls from "./3D/OrbitControls"
import Plane from "./3D/Plane"
import Box from "./3D/Box"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Sandbox
      </header>
      <Canvas className='canvas'>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -11, 0]} />
        <Box position={[0, 0, 0]} scale={[2,2,2]}/>
        <Controls />
      </Canvas>
    </div>
  );
}

export default App;
