import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ProductListItemSkeleton } from 'entities/Product/ui/ProductListItem/ProductListItemSkeleton';
import { Product } from '../../model/types/product';
import cls from './ProductList.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';

interface ProductListProps {
  className?: string;
  products: Product[];
  isLoading?: boolean;
}

export const ProductList = memo((props: ProductListProps) => {
    const {
        className,
        products,
        isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProductList, {}, [className])}>
                {new Array(8).fill(0).map((item, index) => (
                    <ProductListItemSkeleton key={index} />
                ))}
            </div>
        );
    }

    const renderProduct = (product: Product) => (
        <ProductListItem product={product} />
    );

    return (
        <div className={classNames(cls.ProductList, {}, [className])}>
            {products.length > 0
                ? products.map(renderProduct)
                : null}
        </div>
    );
});
