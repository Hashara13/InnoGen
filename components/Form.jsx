"use client";
import React from 'react'
import Link from "next/link";

const Form = ({type,
  keyword,
  setKeyword,
  submitting,
  handleSubmit}) => {
  return (
<section
  className='w-full max-w-full flex-start flex-col'
>
<h1 className='ml-5 mt-5 text-3xl font-bold leading-[1.15] text-black sm:text-6xl text-left'>
        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>{type}Own Tags / Roadmap</span>
      </h1>
      <p className='ml-5 mt-5 text-lg text-gray-200 sm:text-xl max-w-2xl text-left max-w-md'>
        {type} and share Keywords,Joggles & Roadmaps related to Software Development Technologies. 
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
         <label>
          <span className='font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            // value={keyword.prompt}
            // onChange={(e) => setPost({ ...keyword, prompt: e.target.value })}
            placeholder='Write your one here'
            required
            className='form_textarea '
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            // value={post.tag}
            // onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>
         
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
</section>  )
}

export default Form