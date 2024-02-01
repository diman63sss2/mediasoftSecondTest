import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { InputController } from 'shared/ui/InputController/InputController';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const { handleSubmit, control } = useForm();

    const onSubmit = useCallback(async (data) => {
        const result = await dispatch(loginByUsername(data));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch]);

    /* eslint-disable */
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
