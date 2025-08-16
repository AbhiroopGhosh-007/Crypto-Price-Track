function Pagination({ totalCoins, coinsPerPage, setPage, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4 flex-wrap gap-2">
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`px-3 py-1 border rounded ${currentPage === num
              ? "bg-blue-500 text-white"
              : "bg-white dark:bg-gray-800 dark:text-white"
            }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
