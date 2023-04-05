import { Status } from 'shared/const/common'

export type size = 's' | 'm' | 'l' | 'xl'

export interface Product {
	id: string
	size: size[]
	title: string
	currency: string
	price: number
	image: string
	brandName: string
	brandId: number
	description: string
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
	brandId?: string
}

export interface ReturnfetchProductsData {
	data: Product[],
	totalPages: number
}