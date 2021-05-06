import { useEffect, useState } from "react";
import Memes from "../components/memeTemplatesPage/Memes";
import MemeSearch from "../components/memeTemplatesPage/MemeSearch";
import Pagination from "../components/memeTemplatesPage/Pagination";
import { useMeme } from "../context/MemeContext";
import Error from "../layouts/Error";
import Loader from "../layouts/Loader";

const MemeTemplates = () => {
  const { memes, loading, error, fetchMemes, clearFilter } = useMeme();

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(25);
  const indexOfLastMeme = currentPage * perPage;
  const indexOfFirstMeme = indexOfLastMeme - perPage;
  const currentMemes =
    memes.length > 0 && memes.slice(indexOfFirstMeme, indexOfLastMeme);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchMemes();

    return () => {
      clearFilter();
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
      <h1 className="text-3xl text-gray-800">Meme Templates</h1>
      <h2 className="mt-1 text-sm text-gray-800">
        Caption and edit your memes
      </h2>

      <MemeSearch />

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
    </div>
  );
};

export default MemeTemplates;
