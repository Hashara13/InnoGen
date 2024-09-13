"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import UserProfile from '@components/UserProfile';
const Profile = () => {
    const router = useRouter();
    const { data: session } = useSession();
    useEffect(() => {

    const fetchTechs = async () => {
        try {
            const response = await fetch(`/api/users/${session?.user.id}/tech`);          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log("Fetched data from API:", data);
          setKeywords(data);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
        fetchTechs();
      }, []);
    const handleEdit = (keyword) => {
        // router.push(`/update-prompt?id=${post._id}`);
      };
    
      const handleDelete = async (keyword) => {
        // const hasConfirmed = confirm(
        //   "Are you sure you want to delete this prompt?"
        // );
      }

  return (
<UserProfile
  name='My'
  desc='Welcome to your personalized profile page.'
  data={myPosts}
  handleEdit={handleEdit}
  handleDelete={handleDelete}

/>  )
}

export default Profile
