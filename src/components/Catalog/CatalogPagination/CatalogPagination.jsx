import React from 'react';
import cl from './CatalogPagination.module.css';

const CatalogPagination = ({ setFilters, filters, elements }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(elements / filters.onPage); i++) {
    pages.push(i);
  }
  if (elements > filters.onPage) {
    return (
      <ul className={cl.pagination}>
        {pages.map((el) => (
          <li
            className={cl.item + ` ${el === filters.page ? cl.active : ''}`}
            onClick={() => setFilters({ ...filters, page: el })}
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>
    );
  }
};

export default CatalogPagination;
