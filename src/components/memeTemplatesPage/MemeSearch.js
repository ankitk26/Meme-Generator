import { useEffect, useRef } from "react";
import { useMeme } from "../../context/MemeContext";

const MemeSearch = () => {
  const search = useRef("");
  const { filteredMemes, filterMemes, clearFilter } = useMeme();

  useEffect(() => {
    if (filteredMemes === null) {
      search.current.value = "";
    }
  });

  const handleSearchChange = (e) => {
    search.current.value !== "" ? filterMemes(e.target.value) : clearFilter();
  };

  return (
    <>
      <input
        className="w-11/12 px-3 py-1 my-5 border-2 border-gray-600 rounded-lg md:w-1/3 focus:outline-none"
        ref={search}
        placeholder="Search Memes"
        onChange={handleSearchChange}
      />
    </>
  );
};

export default MemeSearch;
