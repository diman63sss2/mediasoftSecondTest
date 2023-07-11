import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { CartPage } from 'pages/CartPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRouter {
  MAIN = 'main',
  CART = 'cart',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.CART]: '/cart',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouter.CART]: {
        path: RoutePath.cart,
        element: <CartPage />,
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
