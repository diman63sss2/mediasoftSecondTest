import React, { memo, useCallback, useMemo } from 'react';
import { ProductList, ProductsCategory } from 'entities/Product';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { ProductPagePagination } from 'pages/MainPage/ui/ProductsPagePagination/ProductPagePagination';
import { useTranslation } from 'react-i18next';
import { ProductsPageFilters } from 'pages/MainPage/ui/ProductsPageFilters/ProductsPageFilters';
import { useSearchParams } from 'react-router-dom';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { initProductsPage } from '../../model/services/initProductsPage/initProductsPage';
import { fetchProductsList } from '../../model/services/fetchProductsList/fetchProductsList';
import {
    getProductsPageCategory,
    getProductsPageCount,
    getProductsPageError,
    getProductsPageIsLoading,
    getProductsPageLimit,
    getProductsPageNum,
} from '../../model/selectors/productsPageSelectors';
import { getProducts, productsPageActions, productsPageReducer } from '../../model/slices/productsPageSlice';
import cls from './MainPage.module.scss';

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
    const productsCategory = useSelector(getProductsPageCategory);

    const error = useSelector(getProductsPageError);

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initProductsPage(searchParams));
    });

    const loadPage = useCallback((page: number) => {
        dispatch(productsPageActions.setPage(page));
        dispatch(fetchProductsList({}));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [dispatch]);

    const fetchDate = useCallback(() => {
        dispatch(fetchProductsList({}));
    }, [dispatch]);

    const onChangeCategory = useCallback((tab: TabItem) => {
        dispatch(productsPageActions.setPage(1));
        dispatch(productsPageActions.setCategory(tab.value as ProductsCategory));
        fetchDate();
    }, [dispatch, fetchDate]);

    const TypeTabs = useMemo<TabItem[]>(
        () => Object.keys(ProductsCategory)
            .filter((category) => Number.isNaN(Number(category))) // Фильтруем только строки из перечисления
            .map((category) => ({
                value: ProductsCategory[category as keyof typeof ProductsCategory],
                content: ProductsCategory[category as keyof typeof ProductsCategory],
            })),
        [],
    );

    if (error) {
        return (
            <div>
                {t('Ошибка')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                <ProductsPageFilters />
                <div className={cls.ProductsPageListContainer}>
                    <Tabs
                        className={cls.ProductsPageCategories}
                        tabs={TypeTabs}
                        value={productsCategory}
                        onTabClick={onChangeCategory}
                    />
                    <div>
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
                    </div>
                </div>

            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(MainPage);
