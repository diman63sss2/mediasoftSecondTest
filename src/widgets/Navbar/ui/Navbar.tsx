import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { AppLogo } from 'shared/ui/AppLogo/AppLogo';
import { BacketButton } from 'widgets/BacketButton/BacketButton';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import useWindowSize from 'shared/lib/hooks/useWindowSize/useWindowSize';
import { BurgerButton } from 'shared/ui/BurgerButton/BurgerButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const windowSize = useWindowSize();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onToggleMenu = useCallback(() => {
        if (windowSize.width < 1024) {
            setIsMenuModal(!isMenuModal);
        }
    }, [isMenuModal, windowSize]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header
                data-testid="navbar"
                className={classNames(cls.Navbar, {}, [className, windowSize.width < 1024 ? cls.mobile : ''])}
            >
                <AppLogo to="/" className={cls.logo} />
                <div
                    className={classNames(cls.modal, {}, [className, isMenuModal ? cls.active : ''])}
                >
                    <nav className={cls.links}>
                        <AppLink onClick={onToggleMenu} theme={AppLinkTheme.PRIMARY} to="/">
                            {t('Главная')}
                        </AppLink>
                        <AppLink onClick={onToggleMenu} theme={AppLinkTheme.PRIMARY} to="/about">
                            {t('О сайте')}
                        </AppLink>
                    </nav>
                    <div className={cls.subLine}>
                        <ThemeSwitcher className={cls.themeSwitcher} />
                        <LangSwitcher className={cls.langSwitcher} />
                        <Button
                            className={cls.buttonModal}
                            theme={ThemeButton.OUTLINE}
                            onClick={onLogout}
                        >
                            {t('Выйти')}
                        </Button>
                        <Button theme={ThemeButton.CLEAR} onClick={onToggleMenu}>
                            <BacketButton className={cls.bucketButton} />
                        </Button>
                    </div>
                </div>

                { windowSize.width < 1024
                  && (
                      <Button theme={ThemeButton.CLEAR} onClick={onToggleMenu}>
                          <BurgerButton active={isMenuModal} />
                      </Button>
                  )}
            </header>
        );
    }

    return (
        <header
            data-testid="navbar"
            className={classNames(cls.Navbar, {}, [className, windowSize.width < 1024 ? cls.mobile : ''])}
        >
            <AppLogo to="/" className={cls.logo} />
            <div
                className={classNames(cls.modal, {}, [className, isMenuModal ? cls.active : ''])}
            >
                <nav className={cls.links}>
                    <AppLink onClick={onToggleMenu} theme={AppLinkTheme.PRIMARY} to="/">
                        {t('Главная')}
                    </AppLink>
                    <AppLink onClick={onToggleMenu} theme={AppLinkTheme.PRIMARY} to="/about">
                        {t('О сайте')}
                    </AppLink>
                </nav>
                <div className={cls.subLine}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                    <Button
                        className={cls.buttonModal}
                        theme={ThemeButton.OUTLINE}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </Button>
                </div>
                { isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
            </div>
            { windowSize.width < 1024
              && (
                  <Button theme={ThemeButton.CLEAR} onClick={onToggleMenu}>
                      <BurgerButton active={isMenuModal} />
                  </Button>
              )}
        </header>
    );
});
