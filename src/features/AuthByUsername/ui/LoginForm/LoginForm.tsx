import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from '../../model/selectors/authByUsernameSelectors';
import { loginByUsername } from '../../model/actions/LoginByUsername';
import { setUserPassword } from '../../model/actions/setUserrPassword';
import { setUsername } from '../../model/actions/setUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(setUserPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        dispatch(loginByUsername({ username, password }, () => {
            onSuccess(); // Вызываем onSuccess внутри компонента
        }));
    }, [dispatch, password, username, onSuccess]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                id="LoginForm-Login"
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Login')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                id="LoginForm-Password"
                type="text"
                className={cls.input}
                placeholder={t('Password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>

    );
});

export default LoginForm;
