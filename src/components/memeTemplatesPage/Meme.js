import React from "react";
import { Link } from "react-router-dom";

const Meme = ({ meme }) => {
  const { url, name, id } = meme;
  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-5">
      <img src={url} alt={name} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
      <h4 className="font-bold tracking-wider">{name}</h4>
      <Link to={`/generateMeme/${id}`}>
        <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 hover:shadow focus:outline-none">
          Add Caption
        </button>
      </Link>
    </div>
  );
};

export default Meme;
