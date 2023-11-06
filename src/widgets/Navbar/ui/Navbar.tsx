import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLogo } from 'shared/ui/AppLogo/AppLogo';
import { BasketButton } from 'widgets/BasketButton/BasketButton';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userLogout } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userLogout());
    }, [dispatch]);

    if (isAuth.id !== null) {
        return (
            <header data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
                <AppLogo to="/" />
                <nav className={cls.links}>
                    <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                        {t('Главная')}
                    </AppLink>
                    <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                        {t('О сайте')}
                    </AppLink>
                </nav>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button
                    className={cls.buttonModal}
                    theme={ThemeButton.OUTLINE}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
                <BasketButton />
            </header>
        );
    }

    return (
        <header data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
            <AppLogo to="/" />
            <nav className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    {t('О сайте')}
                </AppLink>
            </nav>
            <ThemeSwitcher />
            <LangSwitcher />
            <Button
                className={cls.buttonModal}
                theme={ThemeButton.OUTLINE}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            { isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
