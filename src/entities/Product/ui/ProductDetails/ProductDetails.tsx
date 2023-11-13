import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/ui/Button/Button';
import { AddUserProductProps } from 'entities/User/model/services/addUserProduct';
import { productDetailsReducer } from '../../model/slice/productDetailsSlice';
import {
    getProductDetailsData,
    getProductDetailsError,
    getProductDetailsIsLoading,
} from '../../model/selectors/productDetails';
import cls from './ProductDetails.module.scss';
import { fetchProductById } from '../../model/services/fetchProductById/fetchProductById';

interface ProductDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
    productDetails: productDetailsReducer,
};

export const ProductDetails = memo((props: ProductDetailsProps) => {
    const { t } = useTranslation();
    const {
        className,
        id,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getProductDetailsIsLoading);
    const product = useSelector(getProductDetailsData);
    const error = useSelector(getProductDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>

                <div className={cls.image_wrapper}>
                    <Skeleton className={cls.category} width={300} height={32} />
                    <Skeleton className={cls.image} width={300} height={250} />
                </div>
                <div className={cls.info}>
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton className={cls.title} width="auto" height={64} />
                    <Skeleton className={cls.price} width={300} height={32} />
                </div>
            </>
        );
    } else if (error) {
        content = (
            <Text title={t('Произошла ошибка при загрузке статьи.')} />
        );
    } else {
        content = (
            <>
                <div className={cls.image_wrapper}>
                    <Text className={cls.category} text={product?.category} />
                    <img className={cls.image} src={product?.image} alt={product?.title} />
                </div>
                <div className={cls.info}>
                    <Text className={cls.title} text={product?.title} />
                    <Text className={cls.title} text={product?.description} />
                    <Text className={cls.price} text={`${product?.price}$`} />
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
