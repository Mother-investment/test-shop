import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Order } from '../types/orderSchema'

export const postOrder = createAsyncThunk<{result: 'ok'}, Order, ThunkConfig<string>>(
	'order/postOrder',
	async (order, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.postApi.post<{result: 'ok'}>('', JSON.stringify(order))

			return response.data
		} catch (error) {
			return rejectWithValue('ошибка')
		}
	}
)