"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { MdContentCopy } from "react-icons/md";

const ContentCard = ({ keyword, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(keyword.keyword1);
    navigator.clipboard.writeText(keyword.keyword1);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    // <div className='border p-4 rounded shadow-md bg-white'>
    //   <h2 className='text-lg font-bold'>{keyword.keyword1}</h2>
    //   <p className='text-gray-500'>Tech: {keyword.tech}</p>
    //   <p className='text-gray-500'>Roadmap: {keyword.roadmap}</p>
    //   <p className='text-gray-500'>Tag: {keyword.tag}</p>
    //   <button
    //     className='text-blue-500 underline mt-2'
    //     onClick={() => handleTagClick(keyword.tag)}
    //   >
    //     View related tags
    //   </button>
    // </div>

    <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          // onClick={handleProfileClick}
        >
          <Image
            src={keyword.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className=" font-semibold text-gray-900">
              {keyword.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {keyword.creator.email}
            </p>
          </div>
          <div
            className="w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer;"
            onClick={handleCopy}
          >
            <Image
              src={
                copied === keyword.keyword1
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt={copied === keyword.keyword1 ? "tick_icon" : "copy_icon"}
              width={12}
              height={12}
            />
          </div>
          <p className='my-4 text-sm text-gray-700'>{keyword.keyword1}</p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(keyword.tag)}
      >
        #{keyword.tag}
      </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
