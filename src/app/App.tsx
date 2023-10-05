import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch((userActions.initAuthData()));
    }, [dispatch]);
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
