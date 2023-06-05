import React from "react";
import {CART_ROUTE, ERROR_ROUTE, MAIN_ROUTE, ORDER_ROUTE, OTHER_ROUTE} from "../untils/const";
import Catalog from "../pages/Catalog/Catalog.jsx";
import Cart from "../pages/Cart.jsx";
import Order from "../pages/Order.jsx";
import Page404 from "../pages/Page404.jsx";
import {Navigate} from "react-router-dom";

export const publicRoutes = [
    {path: MAIN_ROUTE, component: <Catalog/>, exact: true},
    {path: ERROR_ROUTE, component: <Page404/>, exact: true},
    {path: OTHER_ROUTE, component: <Navigate to="/error-page" />, exact: true},
]

export const privateRoutes = [
    {path: MAIN_ROUTE, component: <Catalog/>, exact: true},
    {path: CART_ROUTE, component: <Cart/>, exact: true},
    {path: ORDER_ROUTE, component: <Order/>, exact: true},
    {path: ERROR_ROUTE, component: <Page404/>, exact: true},
    {path: OTHER_ROUTE, component: <Navigate to="/error-page" />, exact: true},
]