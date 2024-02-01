import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './BurgerButton.module.scss';

interface BurgerButtonProps {
  className?: string;
  active: boolean;
}

export const BurgerButton = (props: BurgerButtonProps) => {
    const {
        className,
        active,
        ...otherProps
    } = props;

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.BurgerButton, {}, [className, active ? cls.active : ''])} {...otherProps}>
            <div className={cls.line} />
            <div className={cls.line} />
            <div className={cls.line} />
        </div>
    );
};
