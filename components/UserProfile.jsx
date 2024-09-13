"use client";
import ContentCard from './ContentCard';
import React from 'react'

const UserProfile = ({ name,
  desc,
  data,
  handleEdit,
  handleDelete}) => {
  return (
    <section className='w-full'>
      <h1 className='mt-5 text-2xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left'>
        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>{name} Profile</span>
      </h1>
      <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left'>{desc}</p>
      {console.log("Data received:", data)}
      <div className='mt-10 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3'>
        {data.map((keyword) => (
          <div key={keyword._id}>
          {console.log("Keyword:", keyword)}
          <ContentCard
          key={keyword._id}
          keyword={keyword}
            handleEdit={() => handleEdit && handleEdit(keyword)}
            handleDelete={() => handleDelete && handleDelete(keyword)}
          />
            </div>
        ))}
      </div>
    </section>  )
}

export default UserProfile