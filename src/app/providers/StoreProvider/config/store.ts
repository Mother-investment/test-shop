import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api, $postApi } from 'shared/api/api'
import { brandsReducer } from 'features/BrandsFilter'
import { productsReducer } from 'entities/Products'
import { cartReducer } from 'features/Cart'
import { orderReducer } from 'features/Order'

export function createReduxStore(
	initialState?: StateSchema
) {

	const rootReducer: ReducersMapObject<StateSchema> = {
		products: productsReducer,
		brands: brandsReducer,
		cart: cartReducer,
		order: orderReducer
	}

	const extraArg: ThunkExtraArg = {
		api: $api,
		postApi: $postApi
	}

	const store = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg,
			},
		}),
	})

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];