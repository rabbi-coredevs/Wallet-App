const Pagination = ({ data = {}, handlePagination = () => {} }) => {
  const { totalPages, page } = data;
  console.log("current page =====>", page);

  // Function to generate pagination buttons
  function generatePaginationButtons(currentPage, totalPages) {
    const buttons = [];

    buttons.push(1); // First page button
    if (totalPages > 7 && currentPage > 3) {
      buttons.push("...");
    }
    const startButton = Math.max(2, currentPage - 2);
    const endButton = Math.min(totalPages - 1, startButton + 4);
    for (let i = startButton; i <= endButton; i++) {
      buttons.push(i);
    }
    if (totalPages > 7 && currentPage < totalPages - 3) {
      buttons.push("...");
    }
    if (totalPages > 1) {
      buttons.push(totalPages); // Last page button
    }

    return buttons;
  }

  const paginationButtons = generatePaginationButtons(page, totalPages);

  return (
    <div className="">
      <button
        className={`${page === 1 && "hidden"} p-2 border rounded`}
        onClick={() => handlePagination(page - 1)}
      >
        Prev
      </button>
      {paginationButtons.map((button, idnex) => {
        if (typeof button === "number") {
          return (
            <button
              key={button + idnex}
              onClick={() => handlePagination(button)}
              className={`p-2 bg-blue-700 rounded text-white m-1 w-8 ${
                page === button && "bg-white text-black border"
              }`}
            >
              {button}
            </button>
          );
        } else {
          return (
            <button key={button + idnex} className="p-2 rounded border m-1 w-8">
              {button}
            </button>
          );
        }
      })}
      <button
        className={`${page === totalPages && "hidden"} p-2 border rounded`}
        onClick={() => handlePagination(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
