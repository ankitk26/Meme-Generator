import React, { useEffect, useContext } from "react";
import { MemeContext } from "../context/MemeContext";
import MemeGenerator from "./MemeGenerator";
import Error from "../layouts/Error";
import Loader from "../layouts/Loader";

const SingleMeme = (props) => {
  const { memes, loading, error, fetchMemes, clear } = useContext(MemeContext);

  useEffect(() => {
    fetchMemes();
    return () => {
      clear();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto text-center mt-5">
      {error ? (
        <Error />
      ) : loading ? (
        <Loader />
      ) : (
        <>
          {memes
            .filter((meme) => meme.id === props.match.params.memeId)
            .map((meme) => (
              <div key={meme.id}>
                <h2 className="text-2xl mb-5">{meme.name}</h2>
                <div className="flex gap-3 justify-center items-center mt-10">
                  <i className="fas fa-info-circle text-gray-800"></i>
                  <h1 className="text-gray-800">Drag the text to move it around the image</h1>
                </div>
                <MemeGenerator meme={meme} />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default SingleMeme;
