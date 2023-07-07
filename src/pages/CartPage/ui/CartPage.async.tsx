import { lazy } from 'react';

export const CartPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В РЕАЛЬНОМ ПРОЕКТЕ ЭТО НУЖНО УБРАТЬ!!!!!!!!!!!!!!!!!!!!!!!
    setTimeout(() => resolve(import('./CartPage')), 1500);
}));
