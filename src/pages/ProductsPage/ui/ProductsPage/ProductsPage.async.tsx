import { lazy } from 'react';

export const ProductsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В РЕАЛЬНОМ ПРОЕКТЕ ЭТО НУЖНО УБРАТЬ!!!!!!!!!!!!!!!!!!!!!!!
    setTimeout(() => resolve(import('./ProductsPage')), 1500);
}));
