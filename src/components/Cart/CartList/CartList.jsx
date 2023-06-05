import React, {useContext} from 'react';
import cl from './CartList.module.css';
import {AuthContext} from "../../../context";
import {observer} from "mobx-react-lite";
import CartListItem from "../CartListItem/CartListItem.jsx";
import {Link} from "react-router-dom";

const CartList = observer(() => {
    const {user} = useContext(AuthContext);
    if(user.numberProducts > 0){
        return (
            <div>
                <div className={cl.list}>
                    {
                        JSON.parse(JSON.stringify(user.products)).map((el)=>
                            <CartListItem key={el.id} product={el}/>
                        )
                    }
                </div>
                <div className={cl.footer}>
                    <Link className={cl.link} to={'/order'}>
                        Оформить
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div>Корзина пуста</div>
    );
});

export default CartList;