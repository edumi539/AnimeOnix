import React from "react";

const PaginationComp = ({ itensPerPage, totalItens, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav arial-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li className="page-item" key={number}>
            <a
              className="page-link"
              onClick={() => {
                paginate(number);
              }}
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComp;
