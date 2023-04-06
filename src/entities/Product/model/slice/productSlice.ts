import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductSchema } from '../types/productSchema'
import { fetchProductData } from '../services/fetchProductData'

const initialState: ProductSchema = {
	data: undefined,
	status: 'init',
	errorMessage: undefined
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductData.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchProductData.fulfilled, (state, action: PayloadAction<Product>) => {
				state.status = 'success'
				state.data = action.payload
			})
			.addCase(fetchProductData.rejected, (state, action) => {
				state.status = 'error'
				state.errorMessage = action.payload
			})
	}
})

export const { actions: productActions } = productSlice
export const { reducer: productReducer } = productSlice