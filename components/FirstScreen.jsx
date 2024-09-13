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
  const [allTechs, setAllTechs] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i"); 
    return allTechs.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.keyword1)
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
      setAllTechs(data);
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
