import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ProductListItem.module.scss';
import { Product } from '../../model/types/product';

interface ProductListItemSkeletonProps {
  className?: string;
}

export const ProductListItemSkeleton = memo((props: ProductListItemSkeletonProps) => {
    const {
        className,
    } = props;
    return (
        <li className={classNames(cls.ProductListItem, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.image_wrapper}>
                    <Skeleton width={200} height={200} className={cls.image} />
                </div>
                <div className={cls.info}>
                    <Skeleton className={cls.title} width={200} height={30} />
                    <Skeleton className={cls.price} width={60} height={30} />
                </div>
            </div>
            <div className={cls.additional}>
                {/* {user.isAuth
                    ? (
                        <button className={cls.button} onClick={() => addProduct()}>
                            Добавить в корзину
                        </button>
                    )
                    : (
                        <button className={cl.button} disabled>
                            Добавить в корзину
                        </button>
                    )} */}
            </div>
        </li>
    );
});
