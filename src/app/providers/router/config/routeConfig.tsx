import { CartPage } from 'pages/CartPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { AppRoutes, getRouteCart, getRouteMain, getRouteProduct, getRouteStart } from 'shared/const/router'
import { Navigate, RouteProps } from 'react-router-dom'
import { ProductCardPage } from 'pages/ProductCardPage'


export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.START]: {
		path: getRouteStart(),
		element: <Navigate to={getRouteMain('1')} replace />
	},
	[AppRoutes.MAIN]: {
		path: getRouteMain(':number'),
		element: <MainPage />
	},
	[AppRoutes.CART]: {
		path: getRouteCart(),
		element: <CartPage />
	},

	[AppRoutes.PRODUCT]: {
		path: getRouteProduct(':id'),
		element: <ProductCardPage />
	},

	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />
	}
}