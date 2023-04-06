import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { OrderSchema } from '../types/orderSchema'
import { postOrder } from '../services/postOrder'
import { cartSlice } from 'features/Cart/module/slice/cartSlice'

const initialState: OrderSchema = {
	result: '',
	status: 'init',
	errorMessage: undefined
}

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		clearOrder: (state) => {
			state.result = ''
			cartSlice.actions.clearCart()
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(postOrder.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(postOrder.fulfilled, (state, action: PayloadAction<{result: 'ok'}>) => {
				state.status = 'success'
				state.result = action.payload.result
			})
			.addCase(postOrder.rejected, (state, action) => {
				state.status = 'error'
				state.errorMessage = action.payload
			})
	}
})

export const { actions: orderActions } = orderSlice
export const { reducer: orderReducer } = orderSlice