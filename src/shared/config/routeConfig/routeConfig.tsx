import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { CartPage } from "pages/CartPage";

export enum AppRouter {
  MAIN = 'main',
  CART = 'cart',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.CART]: '/cart',
}

export const routeConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>,
  },
  [AppRouter.CART]: {
    path: RoutePath.cart,
    element: <CartPage/>,
  },

}