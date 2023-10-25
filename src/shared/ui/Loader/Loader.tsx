import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Loader.module.scss';

export enum ThemeLoader {
  NORMAL = 'normal',
  MINI = 'mini',
}

interface LoaderProps {
  className?: string;
  theme?: ThemeLoader;
}

export const Loader = (props: LoaderProps) => {
    const {
        className,
        theme = ThemeLoader.NORMAL,
    } = props;
    return (
        <div className={classNames(cls.Loader, {}, [className, cls[theme]])}>
            <div />
            <div />
        </div>
    );
};
