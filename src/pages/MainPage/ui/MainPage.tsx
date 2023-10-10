import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProductList } from 'entities/Product';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { fetchProductsList } from '../model/services/fetchProductsList/fetchProductsList';
import { getProductsPageError, getProductsPageIsLoading } from '../model/selectors/productsPageSelectors';
import { getProducts, productsPageReducer } from '../model/slices/productsPageSlice';

const reducers: ReducersList = {
    productsPage: productsPageReducer,
};

const MainPage = () => {
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();
    const products = useSelector(getProducts.selectAll);
    const isLoading = useSelector(getProductsPageIsLoading);
    const error = useSelector(getProductsPageError);
    useInitialEffect(() => {
        dispatch(fetchProductsList());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <ProductList isLoading={isLoading} products={products} />
            </div>
        </DynamicModuleLoader>
    );
};

export default MainPage;
