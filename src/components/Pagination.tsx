interface IProps {
  perPage: number;
  totalMemes: any;
  setPage: (pageNumber: number) => void;
  currentPage: number;
}

export default function Pagination({
  perPage,
  totalMemes,
  setPage,
  currentPage,
}: IProps) {
  const pageNumbers = [];

  // Push page numbers into pageNumbers array
  for (let i = 1; i <= Math.ceil(totalMemes / perPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumberClassName =
    "rounded w-8 h-8 text-sm font-medium flex items-center justify-center cursor-pointer";

  return (
    <div className="mt-12 mb-10">
      <ul className="flex items-center justify-center gap-5 md:gap-6">
        {/* Map all page numbers */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage
                ? `bg-gray-600 text-white ${pageNumberClassName}`
                : `bg-gray-100 hover:bg-gray-200 text-gray-600 ${pageNumberClassName}`
            }
            onClick={() => setPage(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
