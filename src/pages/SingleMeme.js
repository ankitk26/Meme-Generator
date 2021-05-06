import { useEffect } from "react";
import MemeGenerator from "../components/singleMemePage/MemeGenerator";
import { useMeme } from "../context/MemeContext";
import Error from "../layouts/Error";
import Loader from "../layouts/Loader";

const SingleMeme = (props) => {
  const { memes, loading, error, fetchMemes, clear } = useMeme();

  useEffect(() => {
    fetchMemes();

    return () => {
      clear();
    };
    // eslint-disable-next-line
  }, []);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mt-5 text-center">
      {memes
        ?.filter((meme) => meme.id === props.match.params.memeId)
        .map((meme) => (
          <div key={meme.id}>
            <h2 className="mb-5 text-2xl">{meme.name}</h2>
            <div className="flex items-center justify-center gap-3 mt-10">
              <i className="text-gray-800 fas fa-info-circle"></i>
              <h1 className="text-gray-800">
                Drag the text to move it around the image
              </h1>
            </div>
            <MemeGenerator meme={meme} />
          </div>
        ))}
    </div>
  );
};

export default SingleMeme;
