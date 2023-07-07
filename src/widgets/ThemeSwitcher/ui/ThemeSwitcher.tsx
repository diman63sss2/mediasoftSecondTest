import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import Icon from 'shared/assets/icons/theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            <Icon />
        </Button>
    );
};
