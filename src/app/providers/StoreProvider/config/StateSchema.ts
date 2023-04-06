import { AxiosInstance } from 'axios'
import { ProductSchema } from 'entities/Product'
import { ProductsSchema } from 'entities/Products'
import { BrandsSchema } from 'features/BrandsFilter'
import { CartSchema } from 'features/Cart'
import { OrderSchema } from 'features/Order'


export interface StateSchema {
	products: ProductsSchema
	brands: BrandsSchema
	cart: CartSchema
	order: OrderSchema
	product: ProductSchema
}

export interface ThunkExtraArg {
	api: AxiosInstance
	postApi: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}