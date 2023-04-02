import { Status } from 'shared/const/common'

export interface Brand {
	id: number;
	title: string;
	sort: string;
	code: string;
}

export interface BrandsSchema {
	data?: Brand[]
	activeBrands: string[]
	status: Status
	errorMessage: string | undefined
}