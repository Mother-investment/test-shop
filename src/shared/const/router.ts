export enum AppRoutes {
    START = 'start',
    MAIN = 'main',
    CART = 'cart',
    PRODUCT = 'product',

    NOT_FOUND = 'not_found'
}

export const getRouteStart = () => '/'
export const getRouteMain = (number: string) => `/${number}`
export const getRouteCart = () => '/cart'
export const getRouteProduct = (id: string) => `/product/${id}`
