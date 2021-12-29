import { IoSearchOutline } from "react-icons/io5";
import { useMeme } from "../context/MemeContext";

export default function MemeSearchInput() {
  const { query, setQuery } = useMeme();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center w-full gap-4 px-3 py-2 mt-3 mb-5 border border-gray-300 rounded md:w-1/3">
      <IoSearchOutline className="text-lg" />
      <input
        className="flex-grow w-full text-sm bg-transparent focus:outline-none"
        value={query}
        placeholder="Search Memes"
        onChange={handleSearchChange}
      />
    </div>
  );
}
