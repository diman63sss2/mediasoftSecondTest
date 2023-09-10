import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLogo } from 'shared/ui/AppLogo/AppLogo';
import { BasketButton } from 'shared/ui/BasketButton/BasketButton';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
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
            <Button
                className={cls.buttonModal}
                theme={ThemeButton.OUTLINE}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
            <BasketButton />
        </div>
    );
};
