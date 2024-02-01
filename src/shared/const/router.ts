export enum AppRoutes {
  MAIN = 'main',
  CART = 'cart',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PRODUCT_PAGE = 'product_page'
}

export const getRouteMain = () => '/';
export const getRouteProductPage = (id: string) => `/product/${id}`;
export const getRouteCart = () => '/cart';
export const getRouteAbout = () => '/about';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteCart()]: AppRoutes.CART,
    [getRouteProductPage(':id')]: AppRoutes.PRODUCT_PAGE,
};
