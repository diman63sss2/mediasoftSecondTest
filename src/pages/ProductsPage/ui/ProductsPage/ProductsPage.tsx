import React, { memo, useCallback, useMemo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initState } from 'pages/ProductsPage/model/actions/initState';
import { useSearchParams } from 'react-router-dom';
import { setPage } from 'pages/ProductsPage/model/actions/setPage';
import { fetchProductsList } from 'pages/ProductsPage/model/actions/fetchProductsList';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ProductsCategory, ProductsSortField } from 'entities/Product';
import { setCategory } from 'pages/ProductsPage/model/actions/setCategory';
import { ProductsPageFilters } from 'pages/ProductsPage/ui/ProductsPageFilters/ProductsPageFilters';
import { ProductPagePagination } from 'pages/ProductsPage/ui/ProductsPagePagination/ProductPagePagination';
import { ProductList } from 'entities/Product/ui/ProductList/ProductList';
import { setSort } from 'pages/ProductsPage/model/actions/setSort';
import cls from './ProductsPage.module.scss';
import {
    getProducts,
    getProductsPageCategory,
    getProductsPageCount,
    getProductsPageError,
    getProductsPageInited,
    getProductsPageIsLoading,
    getProductsPageLimit,
    getProductsPageNum,
    getProductsPageSort,
} from '../../model/selectors/productsPageSelectors';

const ProductsPage = () => {
    const { t } = useTranslation('cart');
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const isLoading = useSelector(getProductsPageIsLoading);

    const productsCount = useSelector(getProductsPageCount);
    const productsPageNum = useSelector(getProductsPageNum);
    const productsLimit = useSelector(getProductsPageLimit);
    const productsCategory = useSelector(getProductsPageCategory);
    const productsPageInited = useSelector(getProductsPageInited);
    const productsPageSort = useSelector(getProductsPageSort);

    const error = useSelector(getProductsPageError);

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        if (!productsPageInited) {
            const sortFromUrl = searchParams.get('sort') as ProductsSortField;
            const pageFromUrl = searchParams.get('page');
            const categoryFromUrl = searchParams.get('category') as ProductsCategory;
            if (sortFromUrl) {
                dispatch(setSort(sortFromUrl));
            }

            if (pageFromUrl) {
                dispatch(setPage(Number(pageFromUrl)));
            }

            if (categoryFromUrl) {
                dispatch(setCategory(categoryFromUrl));
            }

            dispatch(initState());
            dispatch(fetchProductsList());
        }
    });
    const loadPage = useCallback((page: number) => {
        dispatch(setPage(page));
        dispatch(fetchProductsList());
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [dispatch]);

    const fetchDate = useCallback(() => {
        dispatch(fetchProductsList());
    }, [dispatch]);

    const onChangeCategory = useCallback((tab: TabItem) => {
        dispatch(setPage(1));
        dispatch(setCategory(tab.value as ProductsCategory));
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
    );
};

export default memo(ProductsPage);
