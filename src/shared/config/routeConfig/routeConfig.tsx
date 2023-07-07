import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { CartPage } from 'pages/CartPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRouter {
  MAIN = 'main',
  CART = 'cart',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.CART]: '/cart',
    [AppRouter.ABOUT]: '/about',
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

};
