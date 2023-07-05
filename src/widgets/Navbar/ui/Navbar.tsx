import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { AppLogo } from "shared/ui/AppLogo/AppLogo";
import { BasketButton } from "shared/ui/BasketButton/BasketButton";

interface  NavbarProps {
  className?: string;

}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLogo to={'/'}/>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY}  to={'/'}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY}  to={'/about'}>
          О сайте
        </AppLink>
      </div>
      <BasketButton/>
    </div>
  );
};








