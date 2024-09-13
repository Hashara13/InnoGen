"use client";
import React from 'react';
import Link from "next/link";

const Form = ({ type, keyword, setKeyword, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='ml-5 mt-5 text-3xl font-bold leading-[1.15] text-black sm:text-6xl text-left'>
        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>{type} Own Tags & Roadmap</span>
      </h1>
      {/* <p className='ml-5 mt-5 text-lg text-gray-200 sm:text-xl max-w-2xl text-left max-w-md'>
        {type} and share Keywords, Joggles & Roadmaps related to Software Development Technologies.
      </p> */}
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex ml-10 mb-5 flex-col gap-7 rounded-xl border border-gray-400 bg-black-800 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.05)] backdrop-blur p-5'
      >
          <label>
          <span className='font-semibold text-base text-gray-300'>
           Technology{"  "}
            <span className='font-medium'>
              (eg: Java, Python, Ruby & etc)
            </span>
          </span>
          <input
            value={keyword.tech}
            onChange={(e) => setKeyword({ ...keyword, tech: e.target.value })}
            type='text'
          
            required
            className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-200 outline-0 bg-gray-800 shadow-[inset_10px_-50px_94px_0_rgba(199,199,199,0.2)]'          />
        </label>
        
        <label>
        <span className='font-semibold text-base text-gray-300'>
        Add Tags here {" "}
            <span className='font-normal'>
          
            </span>
          </span>
          <input
            value={keyword.tag}
            onChange={(e) => setKeyword({ ...keyword, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-200 outline-0 bg-gray-800 shadow-[inset_10px_-50px_94px_0_rgba(199,199,199,0.2)]'          />
          
        </label>
        <label>
          <span className='font-semibold text-base text-gray-300'>
            Your Own Keywords
          </span>

          <textarea
            value={keyword.keyword1}
            onChange={(e) => setKeyword({ ...keyword, keyword1: e.target.value })}
            placeholder='Write your keywords here'
            required
            className='w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-200 outline-0  bg-gray-700'
          />
        </label>

        <label>
          <span className='font-semibold text-base text-gray-300'>
            Add Roadmaps
          </span>

          <textarea
            value={keyword.roadmap}
            onChange={(e) => setKeyword({ ...keyword, roadmap: e.target.value })}
            placeholder='Enter roadmaps'
            required
            className='w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-200 outline-0  bg-gray-700'
          />
        </label>


        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-m  rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
