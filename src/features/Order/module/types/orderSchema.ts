import { ProductCart } from 'features/Cart/module/types/cartSchema'
import { Status } from 'shared/const/common'

export interface Order {
	products: ProductCart[],
	name: string,
	phone: string
}

export interface OrderSchema {
	result: string
	status: Status
	errorMessage: string | undefined
}