import React, { Suspense, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, getUserInited, userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { fetchUserCart } from 'entities/User/model/services/fetchUserCart';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

function App() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const inited = useSelector(getUserInited);
    const isAuth = useSelector(getUserAuthData);

    useEffect(() => {
        if (!inited) {
            dispatch(userActions.initAuthData());
        }
    }, [dispatch, inited]);

    useEffect(() => {
        console.log('useEffect in APP with isAuth');
        console.log(isAuth);
        if (isAuth) {
            dispatch(fetchUserCart());
        }
    }, [dispatch, isAuth]);

    return (
        <div className={classNames('app', { special: true })}>
            <Suspense fallback="">
                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
