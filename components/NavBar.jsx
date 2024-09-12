"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
} from "next-auth/react";
import Image from "next/image";

const NavBar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

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
        {session?.user ? (
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
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                  className="mr-5 rounded-full  bg-gray-400 py-2 px-5 text-black transition-all hover:bg-gray-600 hover:text-white text-center text-m font-inter font-medium flex items-center"
                >
Get Started                </button>
              ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative ml-auto">
        {session?.user ? (
          <div className="flex">
            <Image
              alt="username"
              className="mr-8 rounded-full"
              width={35}
              height={35}
              onClick={() => {
                setDropdown((prev) => !prev);
              }}
              src="/assets/images/logo-black.png"
            />

            {dropdown && (
              <div className="absolute right-0 top-full mt-3 w-full p-5 text-gray-100 rounded-lg bg-gray-200 min-w-[210px] flex flex-col gap-2 justify-end items-end">
                <Link
                  href="/profile"
                  className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                  onClick={() => setDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/add"
                  className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                  onClick={() => setDropdown(false)}
                >
                  Add New
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setDropdown(false);
                    signOut();
                  }}
                  className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
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
