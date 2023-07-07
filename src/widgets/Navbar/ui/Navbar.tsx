import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLogo } from 'shared/ui/AppLogo/AppLogo';
import { BasketButton } from 'shared/ui/BasketButton/BasketButton';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLogo to="/" />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
            <ThemeSwitcher />
            <LangSwitcher />
            <BasketButton />
        </div>
    );
};
