import React, { useEffect, useContext, useState } from "react";
import { MemeContext } from "../context/MemeContext";
import MemeSearch from "../components/memeTemplatesPage/MemeSearch";
import Pagination from "../components/memeTemplatesPage/Pagination";
import Memes from "../components/memeTemplatesPage/Memes";
import Loader from "../layouts/Loader";
import Error from "../layouts/Error";

const MemeTemplates = () => {
  const { memes, loading, error, fetchMemes, clearFilter } = useContext(
    MemeContext
  );

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(25);
  const indexOfLastMeme = currentPage * perPage;
  const indexOfFirstMeme = indexOfLastMeme - perPage;
  const currentMemes =
    memes.length > 0 && memes.slice(indexOfFirstMeme, indexOfLastMeme);

  useEffect(() => {
    fetchMemes();
    return () => {
      clearFilter();
    };
    // eslint-disable-next-line
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto text-center mt-5">
      <h1 className="text-gray-800 text-3xl">Meme Templates</h1>
      <h2>Caption and edit your memes</h2>
      <MemeSearch />
      {error ? (
        <Error />
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <Pagination
            perPage={perPage}
            totalMemes={memes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <Memes memes={currentMemes} loading={loading} error={error} />
          <Pagination
            perPage={perPage}
            totalMemes={memes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default MemeTemplates;
