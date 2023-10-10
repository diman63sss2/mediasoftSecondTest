import React from 'react';
import { useTranslation } from 'react-i18next';
import { Product, ProductList } from 'entities/Product';

const product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    // eslint-disable-next-line max-len
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rate: 3.9,
} as Product;

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <ProductList isLoading products={[product]} />
        </div>
    );
};

export default MainPage;
