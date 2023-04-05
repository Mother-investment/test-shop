import { Status } from 'shared/const/common'

export interface Brand {
	id: string
	title: string
}

export interface BrandsSchema {
	data?: Brand[]
	activeBrands: string[]
	status: Status
	errorMessage: string | undefined
}