import { Link } from "react-router-dom";

const MemeItem = ({ meme }) => {
  const { url, name, id } = meme;

  return (
    <div className="flex flex-col items-center justify-center gap-5 mb-5">
      <img src={url} alt={name} className="object-cover w-36 h-36" />
      <h4 className="font-bold tracking-wider">{name}</h4>

      <Link to={`/generateMeme/${id}`}>
        <button className="px-4 py-1 text-white bg-blue-700 rounded hover:bg-blue-800 hover:shadow focus:outline-none">
          Add Caption
        </button>
      </Link>
    </div>
  );
};

export default MemeItem;
