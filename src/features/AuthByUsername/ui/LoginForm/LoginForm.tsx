import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                id="loginForm-login"
                placeholder={t('Login')}
                type="text"
                className={cls.input}
            />
            <Input
                id="loginForm-password"
                placeholder={t('Password')}
                type="text"
                className={cls.input}
            />
            <Button theme={ThemeButton.OUTLINE} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
