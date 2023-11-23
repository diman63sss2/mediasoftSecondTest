import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { Button } from 'shared/ui/Button/Button';
import { addUserProduct, AddUserProductProps } from 'entities/User/model/services/addUserProduct';
import { productsPageActions } from 'pages/MainPage/model/slices/productsPageSlice';
import { useDispatch } from 'react-redux';
import { cleanUserCart } from 'entities/User/model/services/cleanUserCart';

const CartPage = () => {
    const { t } = useTranslation('cart');
    const dispatch = useDispatch();
    const cleanUserProducts = useCallback(() => {
        dispatch(cleanUserCart());
    }, [dispatch]);
    return (
        <Page>
            <Button onClick={cleanUserProducts}>{t('Очистить корзину')}</Button>
            {t('Корзина')}
        </Page>
    );
};

export default CartPage;
