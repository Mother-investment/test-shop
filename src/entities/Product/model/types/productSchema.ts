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

export interface ProductSchema {
	data?: Product
	status: Status
	errorMessage: string | undefined
}

export interface FetchProductDataParams {
	id: string
}