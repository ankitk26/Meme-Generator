import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const NavLink = ({ to, heading }) => {
    return (
      // Link to the route page
      <Link to={`/${to}`}>
        <button className="p-3 bg-gray-100 opacity-75 text-gray-900 px-6 font-bold focus:outline-none hover:bg-gray-300">
          {heading}
        </button>
      </Link>
    );
  };
  return (
    <div className="intro-page">
      {/* Black overlay */}
      <section className="overlay">
        <h2 className="flex justify-center w-11/12 md:w-full text-center mt-32 text-white text-3xl md:text-6xl">
          Start creating your own memes ...
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-5">
          {/* Navigation Links */}
          <NavLink to="memeTemplates" heading="All Meme Templates" />
          <NavLink to="ownMeme" heading="Upload File" />
        </div>
      </section>
    </div>
  );
};

export default Home;
