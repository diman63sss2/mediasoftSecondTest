import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import Image from 'shared/assets/images/cart.svg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserProductsCount } from 'entities/User';
import cls from './BacketButton.module.scss';

interface BacketButtonProps {
  className?: string;
}

export const BacketButton = (props: BacketButtonProps) => {
    const { t } = useTranslation();

    const {
        className,
        ...otherProps
    } = props;

    const productsCount = useSelector(getUserProductsCount);
    return (
        <Link {...otherProps} to="/cart" className={classNames(cls.BasketButton, {}, [className])}>
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
