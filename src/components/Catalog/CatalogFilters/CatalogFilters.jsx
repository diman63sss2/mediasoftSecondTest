import React from 'react';
import cl from './CatalogFilters.module.css';
const CatalogFilters = ({filters, setFilters}) => {

    function selectSort(e) {
        setFilters({...filters, sort: e.target.value, page: 1})
    }


    return (
        <div className={cl.filters}>
            <select onChange={(e) => selectSort(e)} value={filters.sort} name="sort" id="sort">
                <option disabled value="">Сортировать по</option>
                <option value="title">По названию</option>
                <option value="price">По стоимости</option>
                <option value="rate">По рейтингу</option>
                <option value="popular">По популярности</option>
            </select>
        </div>
    );
};

export default CatalogFilters;