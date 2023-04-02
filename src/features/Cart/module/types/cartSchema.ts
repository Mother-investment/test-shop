import { Product } from "entities/Products"


export interface ProductCart extends Product {
	quantity: number
}

export interface CartSchema {
	productsCart: ProductCart[],
	totalPrice: number,
	currency: 'USD'
}