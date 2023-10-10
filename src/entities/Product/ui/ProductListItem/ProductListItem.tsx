import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProductListItem.module.scss';
import { Product } from '../../model/types/product';

interface ProductListItemProps {
  className?: string;
  product: Product;
}

export const ProductListItem = memo((props: ProductListItemProps) => {
    const {
        className,
        product,
    } = props;
    const { t } = useTranslation();

    const shortTitle = (title: string) => {
        if (title.length > 40) {
            return title.substr(0, 40);
        }
        return `${title}...`;
    };
    return (
        <li className={classNames(cls.ProductListItem, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.image_wrapper}>
                    <Text className={cls.category} text={product.category} />
                    <img className={cls.image} src={product.image} alt={product.title} />
                </div>
                <div className={cls.info}>
                    <Text className={cls.title} text={shortTitle(product.title)} />
                    <Text className={cls.price} text={`${product.category}$`} />
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
