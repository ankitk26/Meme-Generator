import { Meme } from "../types/types";
import MemeItem from "./MemeItem";

interface IProps {
  memes: Meme[];
}

export default function MemesList({ memes }: IProps) {
  return (
    <div className="grid items-center justify-between grid-cols-2 gap-6 my-5 md:grid-cols-5">
      {memes.map((meme) => (
        <MemeItem key={meme.id} meme={meme} />
      ))}
    </div>
  );
}
