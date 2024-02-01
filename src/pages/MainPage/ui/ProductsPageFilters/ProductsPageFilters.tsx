import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ProductsSortField, ProductsSortSelector } from 'entities/Product';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { fetchProductsList } from 'pages/MainPage/model/services/fetchProductsList/fetchProductsList';
import { productsPageActions } from '../../model/slices/productsPageSlice';
import { getProductsPageSort } from '../../model/selectors/productsPageSelectors';
import cls from './ProductsPageFilters.module.scss';

interface ProductsPageFiltersProps {
  className?: string;
}

export const ProductsPageFilters = memo(({ className }: ProductsPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const sort = useSelector(getProductsPageSort);

    const fetchDate = useCallback(() => {
        dispatch(fetchProductsList({}));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ProductsSortField) => {
        dispatch(productsPageActions.setPage(1));
        dispatch(productsPageActions.setSort(newSort));
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
