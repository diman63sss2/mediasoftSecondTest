import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import Image from 'shared/assets/images/cart.svg';
import cls from './BasketButton.module.scss';

interface BasketButtonProps {
  className?: string;
}

export const BasketButton = ({ className }: BasketButtonProps) => (
    <Link to="/cart" className={classNames(cls.BasketButton, {}, [className])}>
        <Image fill="#ffffff" />
    </Link>
);
