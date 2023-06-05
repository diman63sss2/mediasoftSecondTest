import React, {useContext} from 'react';
import cl from './CartListItem.module.css';
import {observer} from "mobx-react-lite";
import {AuthContext} from "../../../context";

const CartListItem = observer(({product}) => {

    const {user} = useContext(AuthContext);

    const addProduct = () => {
        user.setProducts(JSON.parse(JSON.stringify(user.products)).filter((el)=> {
            if(product.id === el.id){
                el.num += 1;
            }
            return product;
        }));
    }


    const reduceProduct = () => {
        user.setProducts(JSON.parse(JSON.stringify(user.products)).filter((el)=> {
            if(product.id === el.id){
                el.num -= 1;
            }
            if(el.num <= 0){
                return
            }
            return product;
        }));
    }

    const deleteProduct = () => {
        user.setProducts(JSON.parse(JSON.stringify(user.products)).filter((el)=> {
            if(product.id === el.id){
                return
            }
            return product;
        }));
    }

    const compareProduct = () => {
        user.setProducts(JSON.parse(JSON.stringify(user.products)).filter((el)=> {
            if(product.id === el.id){
                if(product.compare){
                    el.compare = false;
                }else{
                    el.compare = true;
                }
            }
            return el;
        }));
    }

    return (
        <div className={cl.product}>
            <div className={cl.img}>
                <img src={product.image} alt={product.title}/>
            </div>
            <div className={cl.content}>
                <h3>
                    {product.title}
                </h3>
                <p className={cl.description}>
                    {product.description}
                </p>
                <div className={cl.info}>
                    <span className={cl.category}>
                        Категория: {product.category}
                    </span>
                    <div className={cl.rateContainer}>
                        <span className={cl.numRate}>
                           Оценок: {product.rating.count}
                        </span>
                        <span className={cl.rate}>
                            Рейтинг: {product.rating.rate}
                        </span>
                    </div>
                </div>
            </div>
            <div className={cl.interactions}>
                <div className={cl.numberContainer}>
                    <div onClick={()=>addProduct()} className={cl.pluse}>
                        +
                    </div>
                    <div className={cl.number}>
                        {product.num}
                    </div>
                    <div onClick={()=>reduceProduct()} className={cl.minus}>
                        -
                    </div>
                </div>
                <div onClick={()=>deleteProduct()} className={cl.delete}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"/></svg>
                </div>
                <div onClick={()=>compareProduct()} className={cl.compare + ` ${product.compare ? cl.active : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"><path d="M1,8A1,1,0,0,1,2,7H9.586L7.293,4.707A1,1,0,1,1,8.707,3.293l4,4a1,1,0,0,1,0,1.414l-4,4a1,1,0,1,1-1.414-1.414L9.586,9H2A1,1,0,0,1,1,8Zm21,7H14.414l2.293-2.293a1,1,0,0,0-1.414-1.414l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414-1.414L14.414,17H22a1,1,0,0,0,0-2Z"/></svg>
                </div>
            </div>
        </div>
    );
});

export default CartListItem;