import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchProductsDataParams, Product, ReturnfetchProductsData } from '../types/productsSchema'

export const fetchProductsData = createAsyncThunk<ReturnfetchProductsData, FetchProductsDataParams, ThunkConfig<string>>(
	'products/fetchProductsData',
	async (params, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<Product[]>('/products', {
				params: {
					search: params.search,
					l: params.limit,
					p: params.page,
					sortBy: params.sortBy,
					order: params.order,
					brand: params.brand
				}
			})

			return {
				data: response.data,
				totalPages: +response.headers['x-total-count']
			}
		} catch (error) {
			return rejectWithValue('ошибка')
		}
	}
)