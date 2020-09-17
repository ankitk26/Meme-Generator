import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavLink = ({ to, heading }) => {
    return (
      <Link to={`/${to}`}>
        <h1 className="text-gray-900 text-xl hover:text-blue-700">{heading}</h1>
      </Link>
    );
  };
  return (
    <nav
      className="opacity-75 flex justify-center md:justify-between gap-20 items-center md:py-1 md:px-10"
      style={{ background: "#e0e0e0", height: "13vh" }}
    >
      <Link to="/">
        <div className="flex md:justify-evenly w-full items-center justify-center gap-5">
          <img src={logo} alt="logo" className="md:w-1/6 w-1/5" />
          <h1 className="text-gray-900 text-2xl md:text-3xl hover:text-blue-700">React Meme App</h1>
        </div>
      </Link>
      <div className="flex justify-center items-center gap-10">
        <div className="hidden md:flex md:justify-evenly md:items-center md:gap-10 ">
          <NavLink to="memeTemplates" heading="All memes" />
          <NavLink to="ownMeme" heading="Create own meme" />
        </div>
        <div>
          <a href="https://github.com/ankitk26/React-Meme-Generator-SPP-Project">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
