import { useEffect } from "react";
import { MdInfo } from "react-icons/md";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import MemeGenerator from "../components/MemeGenerator";
import { useMeme } from "../context/MemeContext";

export default function SingleMeme() {
  const { allMemes, isLoading, isError, fetchMemes, clearBoxes } = useMeme();

  const params = useParams();

  useEffect(() => {
    if (allMemes.length === 0 || !allMemes) {
      fetchMemes();
    }
    return () => {
      clearBoxes();
    };
    // eslint-disable-next-line
  }, [allMemes]);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  const findMeme = allMemes.find((meme) => meme.id === params.memeId);

  return (
    <div className="container mx-auto mt-12 text-center">
      {/* {JSON.stringify({ isLoading, isError, findMeme })} */}
      {findMeme && (
        <div key={findMeme.id}>
          <h2 className="md:text-2xl text-xl font-semibold text-gray-800">
            {findMeme.name}
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4">
            <MdInfo className="text-gray-800" />
            <h4 className="text-gray-800 text-sm">
              Drag the text to move it around the image
            </h4>
          </div>

          <MemeGenerator
            box_count={findMeme.box_count}
            imageUrl={findMeme.url}
            imageName={findMeme.name}
          />
        </div>
      )}
    </div>
  );
}
