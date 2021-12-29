import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import LinkButton from "./LinkButton";

export default function Navbar() {
  const repoLink =
    "https://github.com/ankitk26/React-Meme-Generator-SPP-Project";

  return (
    <nav className="bg-primary-dark z-50 drop-shadow-2xl flex justify-center md:justify-between gap-20 items-center md:gap-0 md:py-4 py-3 md:px-10 px-5">
      {/* Logo and Title */}
      <Link to="/">
        <div className="flex items-center w-full gap-5">
          <img src={logo} alt="logo" className="w-1/6 md:w-10" />
          <h1 className="text-xl font-semibold text-white hover:text-gray-200 md:text-2xl">
            React Meme App
          </h1>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-10">
        <div className="hidden md:flex md:justify-evenly md:items-center md:gap-10 ">
          <LinkButton to="meme-templates" text="All memes" component="nav" />
          <LinkButton to="own-meme" text="Create own meme" component="nav" />
        </div>

        {/* Link to GitHub repo */}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <FiGithub className="text-xl text-white" />
        </a>
      </div>
    </nav>
  );
}
