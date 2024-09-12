import React from 'react';
import FirstScreen from '@components/FirstScreen';

const HomePage = () => {
  return (
    <section className='w-full h-screen flex items-center mt-2 flex-col'>
      <h1 className='text-4xl font-bold leading-[1.15] text-white-100 sm:text-6xl text-center'>
      Find roadmaps and keywords
        <br className='max-md:hidden mb-5'/>
        <span className='mt-3 bg-gradient-to-r from-purple-500 via-green-600 to-blue-500 bg-clip-text text-transparent text-center'>
        That will help you....
        </span>
        <p className='desc mt-5 text-xl text-gray-400 sm:text-xl max-w-4xl text-center font-regular'>
        Create, and share Keywords,Joggles & Roadmaps related to <br></br>Software Development Technologies
        </p>
      </h1>
      <FirstScreen/>

    </section>
  );
};

export default HomePage;
