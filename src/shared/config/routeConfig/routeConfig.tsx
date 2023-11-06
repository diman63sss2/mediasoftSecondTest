import { RouteProps } from 'react-router-dom';
import { ProductsPage } from 'pages/ProductsPage';
import { CartPage } from 'pages/CartPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRouter {
  PRODUCTS = 'products',
  CART = 'cart',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.PRODUCTS]: '/',
    [AppRouter.CART]: '/cart',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouter, AppRoutesProps> = {
    [AppRouter.PRODUCTS]: {
        path: RoutePath.products,
        element: <ProductsPage />,
    },
    [AppRouter.CART]: {
        path: RoutePath.cart,
        element: <CartPage />,
        authOnly: true,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRouter.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },

};
