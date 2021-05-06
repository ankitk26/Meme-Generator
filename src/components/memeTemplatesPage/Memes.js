import { useContext } from "react";
import { MemeContext } from "../../context/MemeContext";
import MemeItem from "./MemeItem";

const Memes = ({ memes }) => {
  const { filteredMemes } = useContext(MemeContext);

  return (
    // Map through all memes or map through filtered memes
    memes.length || (filteredMemes != null && filteredMemes.length) ? (
      <div className="grid items-center grid-cols-2 gap-6 my-5 md:grid-cols-5 justify-evenly">
        {filteredMemes !== null
          ? filteredMemes.map((meme) => <MemeItem key={meme.id} meme={meme} />)
          : memes.map((meme) => <MemeItem key={meme.id} meme={meme} />)}
      </div>
    ) : (
      <div className="w-full py-2 text-center">
        <span className="text-xl text-gray-600">No results</span>
      </div>
    )
  );
};

export default Memes;
