import React from 'react';
import {Stage, PresentationControls} from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import {useGLTF} from "@react-three/drei";
const About = () => {
// function Model(props){
//     const {scene} = useGLTF("/Avatar.glb");
//     return <primitive object={scene} {...props} /> 
//   }
  
    return (
    <div name='about' className='h-screen bg-[black] text-gray-300'>
    <div className='flex flex-col'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-500'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, this is Lahari Chowtoori.</p>
          </div>
          <div>
            <p>I am a data scientist with 5+ years of experience in AI, big data analytics, and cloud solutions. I excel in predictive modeling, anomaly detection, and advanced data visualization, with a strong focus on sustainability and efficiency. Awarded for my research at Syracuse University, I am adept at delivering data-driven insights for diverse clients.</p>  
          </div>
        </div>
    </div>
 
       <div className="App">
    <div className="App-header">
      {/* <Canvas           
        style={{
          "position": "relative",
          "height": "1000px"
        }}
      >

        <PresentationControls
          global zoom={0.01}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model/>
          </Stage>
        </PresentationControls>
      </Canvas> */}
    </div>
  </div>
  </div>

    );
}
export default About;

// const About = () => {
//   return (
   //   );
// };

