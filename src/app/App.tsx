import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => (
    <div className={classNames('app', { special: true })}>
        <Suspense fallback="">
            <Navbar />
            <AppRouter />
        </Suspense>
    </div>
);

export default App;
