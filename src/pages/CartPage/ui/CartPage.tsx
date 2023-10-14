import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const CartPage = () => {
    const { t } = useTranslation('cart');
    return (
        <Page>
            {t('Корзина')}
        </Page>
    );
};

export default CartPage;
