"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter ,useSearchParams } from 'next/navigation';
import Form from '@components/Form';

const EditNew = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [keyword, setKeyword] = useState({ keyword1: '', tag: '', roadmap:'' ,tech:''});
  const [submitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const techId = searchParams.get("id");

  useEffect(() => {
    const getTechDetails = async () => {
      const response = await fetch(`/api/tech/${techId}`);
      const data = await response.json();

      setPost({
        keyword1: data.keyword1,
        tag: data.tag,
        roadmap: data.roadmap,
        tech: data.tech,
      });
    };

    if (techId) getTechDetails();
  }, [techId]);

  const updateKeyword= async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!techId) return alert("Missing !");

    try {
      const response = await fetch(`/api/tech/${techId}`, {
        method: "PATCH",
        body: JSON.stringify({
          keyword1: keyword.keyword1,
          tag: keyword.tag,
          roadmap: keyword.roadmap,
          tech: keyword.tech,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      keyword={keyword}
      setKeyword={setKeyword}
      submitting={submitting}
      handleSubmit={updateKeyword}
    />
  );
};

export default EditNew;
