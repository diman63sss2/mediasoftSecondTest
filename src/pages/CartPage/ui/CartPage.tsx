import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { cleanUserCart } from 'entities/User/model/actions/cleanUserCart';
import { useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';

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
