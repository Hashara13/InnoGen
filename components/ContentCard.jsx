import React from 'react';

const ContentCard = ({ keyword, handleTagClick }) => {
  return (
    <div className='border p-4 rounded shadow-md bg-white'>
      <h2 className='text-lg font-bold'>{keyword.keyword1}</h2>
      <p className='text-gray-500'>Tech: {keyword.tech}</p>
      <p className='text-gray-500'>Roadmap: {keyword.roadmap}</p>
      <p className='text-gray-500'>Tag: {keyword.tag}</p>
      <button 
        className='text-blue-500 underline mt-2'
        onClick={() => handleTagClick(keyword.tag)}
      >
        View related tags
      </button>
    </div>
  );
};

export default ContentCard;
