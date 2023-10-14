import React, { memo, useCallback } from 'react';
import { ProductList } from 'entities/Product';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { ProductPagePagination } from 'pages/MainPage/ui/ProductsPagePagination/ProductPagePagination';
import { useTranslation } from 'react-i18next';
import { fetchProductsList } from '../../model/services/fetchProductsList/fetchProductsList';
import {
    getProductsPageCount,
    getProductsPageError,
    getProductsPageIsLoading, getProductsPageLimit,
    getProductsPageNum,
} from '../../model/selectors/productsPageSelectors';
import { getProducts, productsPageActions, productsPageReducer } from '../../model/slices/productsPageSlice';

const reducers: ReducersList = {
    productsPage: productsPageReducer,
};

const MainPage = () => {
    const { t } = useTranslation('cart');
    const dispatch = useAppDispatch();
    const products = useSelector(getProducts.selectAll);
    const isLoading = useSelector(getProductsPageIsLoading);

    const productsCount = useSelector(getProductsPageCount);
    const productsPageNum = useSelector(getProductsPageNum);
    const productsLimit = useSelector(getProductsPageLimit);

    const error = useSelector(getProductsPageError);
    useInitialEffect(() => {
        dispatch(productsPageActions.initState());
        dispatch(fetchProductsList({
            page: 1,
        }));
    });

    const loadPage = useCallback((page: number) => {
        dispatch(productsPageActions.setPage(page));
        dispatch(fetchProductsList({
            page,
        }));
    }, [dispatch]);

    if (error) {
        return (
            <div>
                {t('Ошибка')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <ProductList isLoading={isLoading} products={products} />
                { productsLimit < productsCount
                  && (
                      <ProductPagePagination
                          productsLimit={productsLimit}
                          productsCount={productsCount}
                          currentPage={productsPageNum}
                          loadPage={loadPage}
                      />
                  )}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(MainPage);
