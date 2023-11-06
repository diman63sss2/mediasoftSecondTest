import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ProductsSortField, ProductsSortSelector } from 'entities/Product';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from 'pages/ProductsPage/model/actions/fetchProductsList';
import { setSort } from 'pages/ProductsPage/model/actions/setSort';
import { setPage } from 'pages/ProductsPage/model/actions/setPage';
import {
    getProductsPageCategory,
    getProductsPageLimit,
    getProductsPageNum,
    getProductsPageSort,
} from '../../model/selectors/productsPageSelectors';
import cls from './ProductsPageFilters.module.scss';

interface ProductsPageFiltersProps {
  className?: string;
}

export const ProductsPageFilters = memo(({ className }: ProductsPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const sort = useSelector(getProductsPageSort);

    const fetchDate = useCallback(() => {
        dispatch(fetchProductsList());
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ProductsSortField) => {
        dispatch(setPage(1));
        dispatch(setSort(newSort));
        fetchDate();
    }, [dispatch, fetchDate]);

    return (
        <div className={classNames(cls.ProductsPageFilters, {}, [className])}>
            <ProductsSortSelector
                sort={sort}
                onChangeSort={onChangeSort}
            />
        </div>
    );
});
