import React, { useState } from "react";

import { Pagination, PaginationItem, PaginationLink, Alert } from "reactstrap";

const PaginationComp = ({ itensPerPage, totalItens, paginate }) => {
  const [pageNext, setPageNext] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav arial-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="!#" arial-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {pageNumbers.map(number => (
          <li className="page-item" key={number}>
            <a
              className="page-link"
              onClick={() => {
                paginate(number);
                setPageNext(number);
              }}
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => {
              if (pageNext === pageNumbers.length + 1) {
                return alert("Não funcionou em amigo!");
              } else {
                setPageNext(pageNext + 1);
                paginate(pageNext);
              }
            }}
            href="!#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
        <PaginationItem>
          <PaginationLink last href="!#" />
        </PaginationItem>
      </ul>
    </nav>
  );
};

export default PaginationComp;
