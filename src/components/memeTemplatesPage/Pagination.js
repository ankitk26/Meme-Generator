const Pagination = ({ perPage, totalMemes, paginate, currentPage }) => {
  const pageNumbers = [];

  // Push page numbers into pageNumbers array
  for (let i = 1; i <= Math.ceil(totalMemes / perPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumberClassName =
    "rounded border-2 border-gray-600 px-3 py-1 cursor-pointer";

  return (
    <div className="my-5 mb-10">
      <ul className="flex items-center justify-center gap-5 md:gap-10 ">
        {/* Map all page numbers */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage
                ? `bg-gray-600 text-white ${pageNumberClassName}`
                : `bg-gray-100 hover:bg-gray-200 text-gray-600 ${pageNumberClassName}`
            }
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
