import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchProductDataParams, Product } from '../types/productSchema'

export const fetchProductData = createAsyncThunk<Product, FetchProductDataParams, ThunkConfig<string>>(
	'product/fetchProductData',
	async (params, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<Product[]>('/products', {
				params: {
					id: params.id
				}
			})

			return response.data[0]
		} catch (error) {
			return rejectWithValue('ошибка')
		}
	}
)