import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchUserCart, getUserAuthData, getUserInited, initAuthData, setUser,
} from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

function App() {
    const inited = useSelector(getUserInited);
    const isAuth = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const updateUser = (newUser: User) => {
        dispatch(setUser(newUser));
    };

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    useEffect(() => {
        if (isAuth.id !== null) {
            dispatch(fetchUserCart());
        }
    }, [dispatch, isAuth]);

    return (
    // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('app', { special: true })}>
            <Suspense fallback="">
                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
