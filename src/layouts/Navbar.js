import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  return (
    <nav className="opacity-75 bg-[#e0e0e0] h-[13vh] flex justify-center md:justify-between gap-20 items-center md:py-1 md:px-10">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center justify-center w-full gap-5 md:justify-evenly">
          <img src={logo} alt="logo" className="w-1/5 md:w-1/6" />
          <h1 className="text-2xl text-gray-900 md:text-3xl hover:text-blue-700">
            React Meme App
          </h1>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-10">
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
