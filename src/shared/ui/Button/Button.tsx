import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props:ButtonProps) => {
    const {
        children,
        className,
        theme,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
});
