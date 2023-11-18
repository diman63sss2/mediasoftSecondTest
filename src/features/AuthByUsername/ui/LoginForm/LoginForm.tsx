import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { InputController } from 'shared/ui/InputController/InputController';
import { getLoginError, getLoginIsLoading } from '../../model/selectors/authByUsernameSelectors';
import { loginByUsername } from '../../model/actions/LoginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const { handleSubmit, control } = useForm();

    const onSubmit = useCallback(async (data) => {
        dispatch(loginByUsername(data, () => {
            onSuccess(); // Вызываем onSuccess внутри компонента
        }));
    }, [onSuccess, dispatch]);

    /* eslint-disable */
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'This field is required',
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: 'Only alphanumeric characters are allowed',
                        },
                    }}
                    render={({ fieldState }) => (
                        <>
                            <InputController
                                control={control}
                                name="username"
                                placeholder={t('Login')}
                                id="LoginForm-Login"
                            />
                            <span>{fieldState?.error?.message}</span>
                        </>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'This field is required',
                        minLength: {
                            value: 3,
                            message: 'Password must have at least 3 characters',
                        },
                    }}
                    render={({ fieldState }) => (
                        <>
                            <InputController
                                control={control}
                                placeholder={t('Password')}
                                name="password"
                                id="LoginForm-Login"

                            />
                            <span>{fieldState?.error?.message}</span>
                        </>
                    )}
                />
                <Button theme={ThemeButton.OUTLINE} className={cls.loginBtn} type="submit" disabled={isLoading}>
                    {t('Войти')}
                </Button>
            </div>
        </form>

    );
});

export default LoginForm;
