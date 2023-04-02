import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProductsData } from '../services/fetchProductsData'
import { ProductsSchema, ReturnfetchProductsData } from '../types/productsSchema'

const initialState: ProductsSchema = {
	data: [],
	totalPages: 2,
	status: 'init',
	errorMessage: undefined
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsData.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchProductsData.fulfilled, (state, action: PayloadAction<ReturnfetchProductsData>) => {
				state.status = 'success'
				state.data = action.payload.data
			})
			.addCase(fetchProductsData.rejected, (state, action) => {
				state.status = 'error'
				state.errorMessage = action.payload
			})
	}
})

export const { actions: productsActions } = productsSlice
export const { reducer: productsReducer } = productsSlice