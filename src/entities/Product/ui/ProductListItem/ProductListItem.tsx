import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { AddUserProductProps } from 'entities/User/model/services/addUserProduct';
import { useNavigate } from 'react-router-dom';
import { getRouteProductPage } from 'shared/const/router';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppImage } from 'shared/ui/AppImage';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Product } from '../../model/types/product';
import cls from './ProductListItem.module.scss';

interface ProductListItemProps {
  className?: string;
  product: Product;
  addProduct: (props: AddUserProductProps) => void;
  isAuth: boolean;
}

export const ProductListItem = memo((props: ProductListItemProps) => {
    const {
        className,
        product,
        addProduct,
        isAuth,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const shortTitle = (title: string) => {
        if (title.length > 40) {
            return title.substr(0, 40);
        }
        return `${title}...`;
    };

    const fallbackImage = <Skeleton width={200} height={200} className={cls.image} />;

    const errorFallbackImage = (
        <div>
            {t('Ошибка загрузки')}
        </div>
    );

    return (
        <li className={classNames(cls.ProductListItem, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.image_wrapper}>
                    <Text className={cls.category} text={product.category} />
                    {/* <img className={cls.image} src={product.image} alt={product.title} /> */}
                    <AppImage
                        fallback={fallbackImage}
                        errorFallback={errorFallbackImage}
                        src={product.image}
                        alt={product.title}
                        className={cls.image}
                    />
                </div>
                <div className={cls.info}>
                    <Text className={cls.title} text={shortTitle(product.title)} />
                    <Text className={cls.price} text={`${product.price}$`} />
                </div>
            </div>
            <div className={cls.additional}>
                <AppLink
                    className={cls.Button}
                    to={getRouteProductPage((String(product.id)))}
                >
                    {t('Подробнее')}
                </AppLink>
                {isAuth && !product.isLoading ? (
                    <Button
                        className={cls.Button}
                        onClick={() => addProduct({ id: product.id })}
                    >
                        {t('Добавить в корзину')}
                    </Button>
                ) : isAuth ? (
                    <Button className={cls.Button}>{t('Загрузка...')}</Button>
                ) : null}
            </div>
        </li>
    );
});
