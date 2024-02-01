import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUserCart } from 'entities/User/model/services/cleanUserCart';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserProducts } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { ProductCartList } from 'entities/Product/ui/ProductCartList/ProductCartList';

const CartPage = () => {
    const { t } = useTranslation('cart');
    const dispatch = useAppDispatch();
    const productsUser = useSelector(getUserProducts);
    const cleanUserProducts = useCallback(() => {
        dispatch(cleanUserCart());
    }, [dispatch]);

    return (
        <Page>
            {t('Корзина')}
            <br />
            {/* <ProductCartList /> */}
            {/* <ul className="list">
                <li className="product">
                    <div className="img">
                        <br />
                    </div>
                    <div className="content">
                        <h3>
                            <br />
                        </h3>
                        <p className="description">
                            <br />
                        </p>
                        <div className="info">
                            <span className="category">
                                {t('Категория:')}
                                {' '}
                                <br />
                            </span>
                            <div className="rateContainer">
                                <span className="numRate">
                                    {t('Оценок:')}
                                    {' '}
                                    <br />
                                </span>
                                <span className="rate">
                                    {t('Рейтинг:')}
                                    {' '}
                                    <br />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="interactions">
                        <div className="numberContainer">
                            <div className="pluse">
                                +
                            </div>
                            <div className="number">
                                <br />
                            </div>
                            <div className="minus">
                                -
                            </div>
                        </div>
                        <div className="delete">
                            <br />
                        </div>
                        <div>
                            <br />
                        </div>
                    </div>
                </li>
            </ul> */}
            <Button onClick={cleanUserProducts}>{t('Очистить корзину')}</Button>
        </Page>
    );
};

export default CartPage;
