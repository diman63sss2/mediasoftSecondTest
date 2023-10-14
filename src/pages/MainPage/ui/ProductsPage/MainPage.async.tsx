import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В РЕАЛЬНОМ ПРОЕКТЕ ЭТО НУЖНО УБРАТЬ!!!!!!!!!!!!!!!!!!!!!!!
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
