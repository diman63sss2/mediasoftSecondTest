import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import Image from 'shared/assets/images/cart.svg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserProductsCount } from 'entities/User';
import cls from './BasketButton.module.scss';

interface BasketButtonProps {
  className?: string;
}

export const BasketButton = ({ className }: BasketButtonProps) => {
    const { t } = useTranslation();
    const productsCount = useSelector(getUserProductsCount);
    return (
        <Link to="/cart" className={classNames(cls.BasketButton, {}, [className])}>
            {
                productsCount !== 0
        && (
            <div className={cls.num}>
                {productsCount}
            </div>
        )
            }
            <Image fill="#ffffff" />
        </Link>
    );
};
