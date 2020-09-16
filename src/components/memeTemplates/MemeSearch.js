import React, { useContext, useRef, useEffect } from "react";
import { MemeContext } from "../context/MemeContext";

const MemeSearch = () => {
  const search = useRef("");
  const { filteredMemes, filterMemes, clearFilter } = useContext(MemeContext);

  useEffect(() => {
    if (filteredMemes === null) {
      search.current.value = "";
    }
  });

  const handleSearchChange = (e) => {
    if (search.current.value !== "") filterMemes(e.target.value);
    else clearFilter();
  };

  return (
    <>
      <input
        className="my-5 px-3 py-1 border-2 border-gray-600 w-11/12 md:w-1/3 rounded-lg focus:outline-none"
        ref={search}
        placeholder="Search Memes"
        onChange={handleSearchChange}
      />
    </>
  );
};

export default MemeSearch;
