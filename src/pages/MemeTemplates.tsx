import { useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import MemeSearchInput from "../components/MemeSearchInput";
import MemesList from "../components/MemesList";
import Pagination from "../components/Pagination";
import { useMeme } from "../context/MemeContext";
import { Meme } from "../types/types";

export default function MemeTemplates() {
  const { allMemes, isLoading, isError, query, filteredMemes } = useMeme();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 25;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const getCurrentMemes = (memes: Meme[]) => {
    return memes.slice(indexOfFirstMeme, indexOfLastMeme);
  };

  // Pagination setup
  const indexOfLastMeme = currentPage * perPage;
  const indexOfFirstMeme = indexOfLastMeme - perPage;
  const currentMemes = query
    ? getCurrentMemes(filteredMemes)
    : getCurrentMemes(allMemes);

  const setPage = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-4/5 mx-auto mt-12">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h1 className="md:text-2xl text-xl font-semibold text-gray-800">
          All Meme Templates
        </h1>

        <MemeSearchInput />
      </div>

      <MemesList memes={query ? filteredMemes : currentMemes} />

      <Pagination
        perPage={perPage}
        totalMemes={query ? filteredMemes.length : allMemes.length}
        setPage={setPage}
        currentPage={currentPage}
      />
    </div>
  );
}
