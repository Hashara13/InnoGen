"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreateNew = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [keyword, setKeyword] = useState({ keyword1: '', tag: '', roadmap:'' ,tech:''});
  const [submitting, setSubmitting] = useState(false);

  const  createKeyword = async (e) => {
    e.preventDefault();
    console.log('Creating keyword:', keyword);
    setSubmitting(true);
try{
  const response = await fetch('/api/tech/new', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tech: keyword.tech,
      userId: session?.user.id,
      keyword1: keyword.keyword1,
      roadmap: keyword.roadmap,
      tag: keyword.tag,  
    }),
  });
  if (response.ok) {
    console.log('Navigating to homepage...');
    router.push('/');
  } else {
    console.error('Failed to create keyword');
  }
} catch (error) {
  console.error('Error:', error);
  return new Response("Failed to create a new tech keyword", { status: 500 });



}finally{
  setSubmitting(false);

}

  };

  return (
    <Form
      type="Create"
      keyword={keyword}
      setKeyword={setKeyword}
      submitting={submitting}
      handleSubmit={createKeyword}
    />
  );
};

export default CreateNew;
