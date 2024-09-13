"use client";
import { BiCopy } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { MdContentCopy } from "react-icons/md";

const ContentCard = ({ keyword, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(keyword.keyword1);
    navigator.clipboard.writeText(keyword.keyword1);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex-1 break-inside-avoid rounded-lg border between mb-3 border-gray-700 bg-gray-700 p-6 pb-4 shadow-lg backdrop-blur-lg w-full h-fit md:w-[360px]">
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
            <h3 className="font-semibold text-white">
              {keyword.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-400">
              {keyword.creator.email}
            </p>
          </div>
        </div>
        <div
          className="w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer"
          onClick={handleCopy}
        >
          {copied === keyword.keyword1 ? (
            <AiOutlineCheck size={12} color="white" />
          ) : (
            <BiCopy size={12} color="white" />
          )}
        </div>
      </div>
      <p className="my-4 text-sm text-gray-300">{keyword.keyword1}</p>
      <p
        className="font-inter text-sm text-blue-400 cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(keyword.tag)}
      >
        #{keyword.tag}
      </p>
      {session?.user.id === keyword.creator._id && pathName === "/userProfile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
