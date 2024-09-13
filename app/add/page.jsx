"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreateNew = () => {
  const [keyword, setKeyword] = useState({ keyword1: '', tag: '', roadmap:'' ,tech:''});
  const [submitting, setSubmitting] = useState(false);

  const createKeyword = (e) => {
    e.preventDefault();
    console.log('Creating keyword:', keyword);
    setSubmitting(true);
    setSubmitting(false);
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
