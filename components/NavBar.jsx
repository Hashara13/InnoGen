"use client";
import React from 'react'
import { useState , useEffect} from 'react';
import Link from 'next/link';
import {signIn,signOut, useSession, getProviders} from 'next-auth/react'
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav>NavBar</nav>
  )
}

export default NavBar