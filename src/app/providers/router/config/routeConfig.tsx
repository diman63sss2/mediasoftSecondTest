import {
    AppRoutes, getRouteAbout, getRouteCart, getRouteMain, getRouteProductPage,
} from 'shared/const/router';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProductPage } from 'pages/ProductPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AppRoutesProps } from 'shared/types/router';
import { CartPage } from 'pages/CartPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.CART]: {
        path: getRouteCart(),
        element: <CartPage />,
        authOnly: true,
    },
    [AppRoutes.PRODUCT_PAGE]: {
        path: getRouteProductPage(':id'),
        element: <ProductPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
