import { Status } from 'shared/const/common'

export interface Product {
	type: string
	id: number
	sku: string
	title: string
	currency: string
	price: number
	image: string
	brand: number
}

export interface ProductsSchema {
	data?: Product[]
	totalPages: number
	status: Status
	errorMessage: string | undefined
}

export interface Asds {
	l: string
}

type ProductKeys = keyof Product

export interface FetchProductsDataParams {
	search?: string
	limit?: string
	page?: string
	sortBy?: ProductKeys
	order?: 'asc' | 'desc'
	brand?: string
}

export interface ReturnfetchProductsData {
	data: Product[],
	totalPages: number
}