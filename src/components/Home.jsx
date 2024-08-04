import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Data Scientist"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section name='home' className='h-full flex flex-col-2 border-b-[1px] border-b-gray-600 z-10 relative' id="my-content">
      {/* Container */}
      <div className='flex mt-8 mx-auto relative'>
        <div className="App-header mt-16 relative">
          <div className="image-container">
            <img
              src="/LC.jpeg"
              alt="Avatar"
              className="background-image"
            />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      <div className='max-w-[1000px] pr-8 px-4 justify-left h-full' id="AboutContent">
        <p className='text-yellow-600 pt-40 pl-4' id="AboutContentP1">Hi, I am </p>
        <h1 className='text-4xl font-bold text-[grey] pl-4'>
          Lahari Chowtoori
        </h1>
        <h2 className="text-4xl font-bold text-white h-[80px] md:h-auto pl-4" >
          a <span>{text}</span>
          <Cursor
            cursorBlinking={true}
            cursorStyle="_"
            cursorColor="#ff014f"
          />
        </h2>
        <div className='text-[white] py-4 max-w-[900px] pl-4 text-justify' id="AboutContentCursor">
          <p>I am a data scientist with 5+ years of experience in AI, big data analytics, and cloud solutions. I excel in predictive modeling, anomaly detection, and advanced data visualization, with a strong focus on sustainability and efficiency. Awarded for my research at Syracuse University, I am adept at delivering data-driven insights for diverse clients.       </p>
            </div>
      </div>
      <div>
      </div>
    </section>
  );
};

export default Home;
