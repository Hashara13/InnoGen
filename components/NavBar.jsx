"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";

const NavBar = () => {
  const isUserLoggedIn = true;
  const[providers, setProviders]=useState(null);

  useEffect(()=>{
    const setProviders=async()=>{
      const response=await getProviders();
      setProviders(response);
    }
    setProviders();
  },[])


  return (
    <nav className="flex w-full items-center mt-5 ml-2 mb-5">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.png"
          width={180}
          height={180}
          className="object-contain"
        />
      </Link>
      <div className="ml-auto sm:flex hidden ">
        {isUserLoggedIn ? (
          <>
            <Link
              href="/add"
              className="mr-4 rounded-full bg-gray-300 py-2 px-5 text-black transition-all hover:bg-gray-600 hover:text-white text-center text-m font-inter font-medium flex items-center"
            >
              Add New
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="mr-2 rounded-full border-gray-100 py-2 px-5 text-white transition-all hover:bg-red-900 hover:text-white text-center text-m font-inter font-medium flex items-center"
            >
              Log Out
              </button>
              <Link href="/userProfile">
                <Image
          src="/assets/images/logo-black.png"
          alt="username"
                  className="ml-2 rounded-full mr-5"
                  width={35}
                  height={35}
                />
              </Link>
        
          </>
        ) : (
          <>
          {providers && Object.values(providers).map((provider)=>(
             <button
             type="button"
             onClick={()=>signIn(provider.id)}
             key={provider.name}
             className="mr-2 rounded-full bg-green-100 py-2 px-5 text-white transition-all hover:bg-black-900 hover:text-white text-center text-m font-inter font-medium flex items-center"
           >
             Log Out
             </button>
          ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
                 <Image
         alt="username"
         className="mr-20 rounded-full mr-5"
         width={35}
         height={35}
          onClick={()=>{}}
          src="/assets/images/logo-black.png"
        />
            </div>
        ):(
          <>
          {providers && Object.values(providers).map((provider)=>(
             <button
             type="button"
             onClick={()=>signIn(provider.id)}
             key={provider.name}
             className="mr-2 rounded-full bg-green-100 py-2 px-5 text-white transition-all hover:bg-black-900 hover:text-white text-center text-m font-inter font-medium flex items-center"
           >
             Log Out
             </button>
          ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
