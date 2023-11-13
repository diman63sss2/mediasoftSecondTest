import {
    AppRoutes, getRouteAbout, getRouteCart, getRouteMain, getRouteProductPage,
} from 'shared/const/router';
import { ProductsPage } from 'pages/ProductsPage';
import { AboutPage } from 'pages/AboutPage';
import { ProductPage } from 'pages/ProductPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AppRoutesProps } from 'shared/types/router';
import { CartPage } from 'pages/CartPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <ProductsPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.CART]: {
        path: getRouteCart(),
        element: <CartPage />,
    },
    [AppRoutes.PRODUCT_PAGE]: {
        path: getRouteProductPage(':id'),
        element: <ProductPage />,
        authOnly: true,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
