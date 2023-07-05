import { classNames } from "shared/lib/classNames/classNames";
import cls from './BasketButton.module.scss';
import { Link } from "react-router-dom";
import Image from 'shared/assets/images/cart.svg';

interface  BasketButtonProps {
  className?: string;
}

export const BasketButton = ({className}: BasketButtonProps) => {
  return (
    <Link to={'/cart'} className={classNames(cls.BasketButton, {}, [className])}>
      <Image fill={'#ffffff'}/>
    </Link>
  );
};
