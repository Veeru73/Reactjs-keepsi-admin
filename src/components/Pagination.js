import React from "react";

function Pagination({
  hasNext,
  currentPage,
  setCurrentPage,
  totalNumberOfPages,
}) {
  const pageNumbers = [];
  let i = 1;
  while (i <= totalNumberOfPages) {
    pageNumbers.push(i);
    i++;
  }

  const nextPage = () => {
    if (hasNext === true) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${
              currentPage === 1 ? "disabled" : "enabled"
            }`}
          >
            <button className="page-link" onClick={prevPage}>
              Previous
            </button>
          </li>
          {pageNumbers.map((pgNumber) => {
            return (
              <li
                key={pgNumber}
                className={`page-item ${
                  currentPage === pgNumber ? "active" : ""
                }`}
              >
                <button
                  onClick={() => setCurrentPage(pgNumber)}
                  className="page-link"
                >
                  {pgNumber}
                </button>
              </li>
            );
          })}

          <li
            className={`page-item ${
              hasNext === false ? "disabled" : "enabled"
            }`}
          >
            <button className="page-link" onClick={nextPage}>
              nextPage
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
