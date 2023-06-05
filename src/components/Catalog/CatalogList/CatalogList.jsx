import React from 'react';
import cl from './CatalogList.module.css'
import CatalogListItem from "../CatalogListItem/CatalogListItem.jsx";
const CatalogList = ({products, filters}) => {
    const indexOfLastPost = filters.page * filters.onPage;
    const indexOfFirstPost = indexOfLastPost - filters.onPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className={cl.list}>
            {currentPosts.map(product =>
                <CatalogListItem product={product} key={product.id}/>
            )}
        </div>
    );
};

export default CatalogList;