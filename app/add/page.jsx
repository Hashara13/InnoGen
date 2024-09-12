"use client";
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreateNew = () => {
    const {keyword,setKeyword}=useState({prompt:'',tag:''});
    const {submitting,setSubmitting}=useState(false);

    const createKeyword={

    }

  return (
<Form

type="Create"
keyword={keyword}
setKeyword={setKeyword}
submitting={submitting}
handleSubmit={createKeyword}
/>  )
}

export default CreateNew