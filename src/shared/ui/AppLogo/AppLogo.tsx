import { classNames } from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  to?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const {
        className,
        to,
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLogo, {}, [className])}>
            <Logo />
        </Link>
    );
});
