"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreateNew = () => {
  const [keyword, setKeyword] = useState({ keyword1: '', tag: '', roadmap:'' ,tech:''});
  const [submitting, setSubmitting] = useState(false);

  const  createKeyword = async (e) => {
    e.preventDefault();
    console.log('Creating keyword:', keyword);
    setSubmitting(true);
try{
const  response=await fetch('/api/tech/new',{
  method:"POST",
  body:JSON.stringify({
    tech:keyword.tech,
    userID:session?.user.id,
    keyword1:keyword.keyword1,
    roadmap:keyword.keyword1
  })
})
if(!response.ok){
  Router.push('/');
}
}catch(error){
  console.log(error)
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
