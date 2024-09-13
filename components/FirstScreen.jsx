"use client";

import React, { useEffect, useState } from "react";
import ContentCard from "./ContentCard";

const KeywordList = ({ data = [], handleTagClick }) => {
  console.log("Rendering KeywordList with data:", data);
  return (
    <div className="mt-16 prompt_layout">
      {data.length > 0 ? (
        data.map((keyword) => (
          <ContentCard
            key={keyword._id}
            keyword={keyword}
            handleTagClick={handleTagClick}
          />
        ))
      ) : (
        <p>No keywords found</p>
      )}
    </div>
  );
};
const handleTagClick = (tag) => {
  console.log(`Tag clicked: ${tag}`);
};

const FirstScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [keywords, setKeywords] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    // clearTimeout(searchTimeout);
    // setSearchText(e.target.value);

    // // debounce method
    // setSearchTimeout(
    //   setTimeout(() => {
    //     const searchResult = filterPrompts(e.target.value);
    //     setSearchedResults(searchResult);
    //   }, 500)
    // );
  };
  const fetchTechs = async () => {
    try {
      const response = await fetch("/api/tech");
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
  useEffect(() => {
    fetchTechs();
  }, []);
  return (
    <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a keyword, tag or a roadmap"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="block w-full rounded-md border border-gray-400 bg-gray-600 py-2.5  pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
        />
      </form>
      {searchText ? (
  <KeywordList data={keywords} handleTagClick={handleTagClick} />
) : (
  <KeywordList data={keywords} handleTagClick={handleTagClick} />
)}

    </section>
  );
};

export default FirstScreen;
