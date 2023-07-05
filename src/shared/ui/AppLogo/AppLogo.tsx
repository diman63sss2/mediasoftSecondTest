import { classNames } from "shared/lib/classNames/classNames";
import cls from './AppLogo.module.scss';
import Logo from 'shared/assets/images/logo.svg';
import { Link } from "react-router-dom";
import { FC } from "react";

interface  AppLogoProps {
  className?: string;
  to?: string;
}

export const AppLogo: FC<AppLogoProps> = (props) => {

  const {
    className,
    to,
  } = props

  return (
    <Link to={to} className={classNames(cls.AppLogo, {}, [className])}>
      <Logo/>
    </Link>
  );
};
