import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Brand } from '../types/brandsSchema'

export const fetchBrandsData = createAsyncThunk<Brand[], void, ThunkConfig<string>>(
	'brands/fetchBrandsData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<Brand[]>('/brands')

			return response.data
		} catch (error) {
			return rejectWithValue('ошибка')
		}
	}
)