import React from 'react';

import Tableau from '../assets/Tableau.png';
import Azure from '../assets/Azure.png';
import JavaScript from '../assets/javascript.png';
import Angular from '../assets/Angular.png';
import Node from '../assets/node.png';
import Sql from '../assets/SQL.png';
import GitHub from '../assets/github.png';
import Unity from '../assets/Unity.png'; 
import CSharp from '../assets/CSharp.png';
import TypeScript from '../assets/TypeScript.png';
import Maya from '../assets/Maya.png';
import UnityImage from '../assets/UnityLogo.png';
import Python from  '../assets/python.jpg';
const Skills = () => {
  return (
    <section name='skills' className=' border-b-[1px] border-b-gray-600 py-20 text-gray-300'>
   
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full'>
        <div className='flex flex-col w-full justify-center items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Skills</p>
               </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-5 text-center py-8 px-5'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Angular} alt="HTML icon" />
                  <p className='my-4'>Angular</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={TypeScript} alt="HTML icon" />
                  <p className='my-4'>Type Script</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tableau} alt="HTML icon" />
                  <p className='my-4'>Tableau</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Azure} alt="HTML icon" />
                  <p className='my-4'>Azure</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>Java Script</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Unity} alt="HTML icon" />
                  <p className='my-4'>Unity</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GitHub</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>Node JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Sql} alt="HTML icon" />
                  <p className='my-4'>SQL Server</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSharp} alt="HTML icon" />
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Maya} alt="HTML icon" />
                  <p className='my-4'>Maya</p>
              </div>

          </div>
      </div>
    </section>
  );
};

export default Skills;
