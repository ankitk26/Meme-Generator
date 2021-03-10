import React, { useContext } from "react";
import Meme from "./Meme";
import { MemeContext } from "../../context/MemeContext";

const Memes = ({ memes }) => {
  const { filteredMemes } = useContext(MemeContext);

  return (
    // Map through all memes or map through filtered memes
    memes.length || (filteredMemes != null && filteredMemes.length) ? (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-evenly items-center my-5">
        {filteredMemes !== null
          ? filteredMemes.map((meme) => <Meme key={meme.id} meme={meme} />)
          : memes.map((meme) => <Meme key={meme.id} meme={meme} />)}
      </div>
    ) : (
      <div className="py-2 w-full text-center">
        <span className="text-xl text-gray-600">No results</span>
      </div>
    )
  );
};

export default Memes;
