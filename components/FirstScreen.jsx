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
  const [searchedResults, setSearchedResults] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    const searchResult = filterPrompts(value);
    setSearchedResults(searchResult);
  };

  const filterPrompts = (searchText) => {
    if (!searchText) return keywords;

    return keywords.filter((keyword) =>
      [keyword.creator, keyword.tech, keyword.tag, keyword.keyword, keyword.roadmap]
        .some((field) => field.toLowerCase().includes(searchText.toLowerCase()))
    );
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
      setSearchedResults(data); 
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
          placeholder="Search for a keyword, tag, roadmap, or creator"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="block w-full rounded-md border border-gray-400 bg-gray-600 py-2.5 pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
        />
      </form>
      <KeywordList data={searchedResults} handleTagClick={handleTagClick} />
    </section>
  );
};

export default FirstScreen;
