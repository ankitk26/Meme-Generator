import React from "react";
import CustomNavLink from "../layouts/CustomNavLink";

const Home = () => {
  return (
    <div className="intro-page">
      {/* Black overlay */}
      <section className="overlay">
        <h2 className="flex justify-center w-11/12 md:w-full text-center mt-32 text-white text-3xl md:text-6xl">
          Start creating your own memes ...
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-5">
          {/* Navigation Links */}
          <CustomNavLink
            to="memeTemplates"
            heading="All Meme Templates"
            component="home"
          />
          <CustomNavLink to="ownMeme" heading="Upload File" component="home" />
        </div>
      </section>
    </div>
  );
};

export default Home;
