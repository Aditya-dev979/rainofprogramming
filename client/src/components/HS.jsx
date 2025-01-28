import React from "react";

const HS = () => {
  return (
    <section className="hero-section bg-white text-gray-800 dark:bg-[#020817] dark:text-gray-100 transition-colors duration-300">
      <div className="hero-container flex flex-col md:flex-row items-center max-w-6xl mx-auto p-4 gap-6">
        <div className="hero-image w-full md:w-1/2">
          <img
            src="https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
            alt="Smiling woman"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="hero-text w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-indigo-600 dark:text-indigo-400">Enhance Your Skills</span>
            <br /> Learn Anything You Want Today
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarks Grove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <a
            href="/"
            className="cta-button bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
          >
            Get in touch with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HS;
