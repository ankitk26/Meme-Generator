import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  return (
    <nav
      className="opacity-75 flex justify-center md:justify-between gap-20 items-center md:py-1 md:px-10"
      style={{ background: "#e0e0e0", height: "13vh" }}
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex md:justify-evenly w-full items-center justify-center gap-5">
          <img src={logo} alt="logo" className="md:w-1/6 w-1/5" />
          <h1 className="text-gray-900 text-2xl md:text-3xl hover:text-blue-700">
            React Meme App
          </h1>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex justify-center items-center gap-10">
        <div className="hidden md:flex md:justify-evenly md:items-center md:gap-10 ">
          <CustomNavLink
            to="memeTemplates"
            heading="All memes"
            component="nav"
          />
          <CustomNavLink
            to="ownMeme"
            heading="Create own meme"
            component="nav"
          />
        </div>

        {/* Link to github repo */}
        <div>
          <a
            href="https://github.com/ankitk26/React-Meme-Generator-SPP-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
