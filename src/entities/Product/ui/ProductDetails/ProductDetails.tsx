import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProductDetailsData, getProductDetailsError,
    getProductDetailsIsLoading,
} from 'entities/Product/model/selectors/productDetailsSelectors';
import { fetchProductById } from 'entities/Product/model/actions/fetchProductById/fetchProductById';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { AppImage } from 'shared/ui/AppImage';
import cls from './ProductDetails.module.scss';

interface ProductDetailsProps {
  className?: string;
  id: string;
}

export const ProductDetails = memo((props: ProductDetailsProps) => {
    const { t } = useTranslation();
    const {
        className,
        id,
    } = props;
    const dispatch = useDispatch();
    const isLoading = useSelector(getProductDetailsIsLoading);
    const product = useSelector(getProductDetailsData);
    const error = useSelector(getProductDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    const fallbackImage = <Skeleton width={200} height={200} className={cls.image} />;

    const errorFallbackImage = (
        <div>
            {t('Ошибка загрузки')}
        </div>
    );

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
            <Text title={t('Произошла ошибка при загрузке статьи!')} />
        );
    } else {
        content = (
            <>
                <div className={cls.image_wrapper}>
                    <Text className={cls.category} text={product?.category} />
                    <AppImage
                        fallback={fallbackImage}
                        errorFallback={errorFallbackImage}
                        src={product?.image}
                        alt={product?.title}
                        className={cls.image}
                    />
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
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {content}
        </div>
    );
});
