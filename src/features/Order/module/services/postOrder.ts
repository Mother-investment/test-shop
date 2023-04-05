import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Order } from '../types/orderSchema'
import { orderActions } from '../slice/orderSlice'
import { cartActions } from 'features/Cart'

export const postOrder = createAsyncThunk<{result: 'ok'}, Order, ThunkConfig<string>>(
	'order/postOrder',
	async (order, thunkAPI) => {
		const { extra, dispatch, rejectWithValue } = thunkAPI

		try {
			const response = await extra.postApi.post<{result: 'ok'}>('', JSON.stringify(order))

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			return rejectWithValue('ошибка')
		}
	}
)