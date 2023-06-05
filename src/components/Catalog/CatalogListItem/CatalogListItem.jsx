import React, {useContext} from 'react';
import cl from './CatalogListItem.module.css';
import {AuthContext} from "../../../context";
import {observer} from "mobx-react-lite";

const CatalogListItem = observer(({product}) => {

    const {user} = useContext(AuthContext);

    const addProduct = () => {
        const products = JSON.parse(JSON.stringify(user.products));
        let currProduct = null;
        for(let i = 0; i < products.length; i++) {
            if(products[i].id === product.id) {
                currProduct = products[i].id;
                products[i].num = products[i].num + 1;
                user.setProducts([...products])
                return
            }
        }
        user.setProducts([...products, {...product, num: 1}])
    }

    return (
        <li className={cl.item}>
            <div className={cl.content}>
                <div className={cl.image}>
                    <span className={cl.category}>
                        {product.category}
                    </span>
                    <img src={product.image} alt=""/>
                </div>
                <div className={cl.info}>
                    <h3 className={cl.title}>
                        {   product.title.length > 40 ?
                            product.title.substr(0, 40) + '...'
                            :
                            product.title
                        }
                    </h3>
                    <span className={cl.price}>
                        {product.price}$
                    </span>
                </div>
            </div>
            <div className={cl.additional}>
                {user.isAuth ?
                    <button className={cl.button} onClick={()=>addProduct()}>
                        Добавить в корзину
                    </button>
                    :
                    <button className={cl.button} disabled>
                        Добавить в корзину
                    </button>
                }
            </div>
        </li>
    );
});

export default CatalogListItem;