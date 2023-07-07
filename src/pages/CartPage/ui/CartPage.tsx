import React from 'react';
import { useTranslation } from 'react-i18next';

const CartPage = () => {
    const { t } = useTranslation('cart');
    return (
        <div>
            {t('Корзина')}
        </div>
    );
};

export default CartPage;
