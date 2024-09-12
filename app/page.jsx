import React from 'react';
import FirstScreen from '@components/FirstScreen';

const HomePage = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center  mt-2 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-center text-white-100">
        Find roadmaps and keywords
        <br className="hidden md:inline mb-5" />
        <span className="mt-3 bg-gradient-to-r from-purple-500 via-green-600 to-blue-500 bg-clip-text text-transparent text-center">
          That will help you....
        </span>
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-gray-400 max-w-xl text-center">
        Create, and share Keywords, Joggles & Roadmaps related to
        <br className="hidden sm:inline" />
        Software Development Technologies
      </p>
      <FirstScreen />
    </section>
  );
};

export default HomePage;
