import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] py-20 px-4 text-center dark:bg-gradient-to-r dark:from-[#020817] dark:to-[#1f2937]"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/smiling-female-student-writing-essay-sitting-with-laptop-floor_176420-20219.jpg?semt=ais_hybrid')", // Replace with your image URL
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Ensure it stays below content */}
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Course for You
        </h1>
        <p className="text-gray-800 dark:text-gray-300 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
        </p>

        {/* Search Form */}
        <form
          onSubmit={searchHandler}
          className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-2xl mx-auto"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border-none focus:ring-0 px-6 py-3 text-gray-900 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            Search
          </button>
        </form>

        {/* Explore Button */}
        <Button
          onClick={() => navigate(`course/search?query`)}
          className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mt-4"
        >
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
