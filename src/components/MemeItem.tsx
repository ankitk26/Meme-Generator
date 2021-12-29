import { Link } from "react-router-dom";
import { Meme } from "../types/types";

interface IProps {
  meme: Meme;
}

export default function MemeItem({ meme }: IProps) {
  return (
    <Link to={`/generate-meme/${meme.id}`}>
      <div className="flex flex-col items-center gap-5 mb-5">
        <img
          src={meme.url}
          alt={meme.name}
          className="object-cover w-40 h-40"
        />
        <h4 className="text-sm font-medium tracking-wider">{meme.name}</h4>
      </div>
    </Link>
  );
}
