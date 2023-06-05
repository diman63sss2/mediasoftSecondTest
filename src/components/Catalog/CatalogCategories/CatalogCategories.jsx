import React, { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import { getCategories } from '../../../http/catalogAPI';
import cl from './CatalogCategories.module.css';

const CatalogCategories = ({ filters, setFilters }) => {
  const [categories, setCategories] = useState([]);
  const [fetchCategories, isCategoriesLoading] = useFetching(async () => {
    const response = await getCategories();
    setCategories(
      response.data.map((name) => {
        return {
          name: name,
          active: false,
        };
      })
    );
  });

  useEffect(
    () => {
      fetchCategories().then();
    }, // eslint-disable-next-line
    []
  );

  function changeCategories(name) {
    if (name === filters.category) {
      setFilters({ ...filters, category: null, page: 1 });
    } else {
      setFilters({ ...filters, category: name, page: 1 });
    }
  }

  return (
    <div className={cl.categories}>
      {categories.map((el) => (
        <div
          onClick={() => changeCategories(el.name)}
          className={
            cl.category + ` ${el.name === filters.category ? cl.active : ''}`
          }
          key={el.name}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default CatalogCategories;
