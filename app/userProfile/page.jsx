"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UserProfile from "@components/UserProfile";
const Profile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const fetchTechs = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user.id}/tech`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Fetched data from API:", data);
        setKeywords(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    if (session?.user.id) fetchTechs();
  }, []);



  const handleEdit = (keyword) => {
    // router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (keyword) => {
    // const hasConfirmed = confirm(
    //   "Are you sure you want to delete this prompt?"
    // );
  };

  return (
    <UserProfile
      name="My"
      desc="Welcome to your personalized profile page."
      data={keywords}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Profile;
