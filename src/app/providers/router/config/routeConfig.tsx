import { CartPage } from 'pages/CartPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { AppRoutes, getRouteCart, getRouteMain, getRouteStart } from 'shared/const/router'
import { Navigate, RouteProps } from 'react-router-dom'


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

	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />
	}
}