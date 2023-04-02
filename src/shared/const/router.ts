export enum AppRoutes {
    START = 'start',
    MAIN = 'main',
    CART = 'cart',

    NOT_FOUND = 'not_found'
}

export const getRouteStart = () => '/'
export const getRouteMain = (number: string) => `/${number}`
export const getRouteCart = () => '/cart'
