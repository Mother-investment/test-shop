import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BrandsSchema, Brand } from '../types/brandsSchema'
import { fetchBrandsData } from '../services/fetchBrandsData'

const initialState: BrandsSchema = {
	data: [],
	activeBrands: [],
	status: 'init',
	errorMessage: undefined
}

export const brandsSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {
		setActiveBrands: (state, action: PayloadAction<string[]>) => {
			state.activeBrands = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBrandsData.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchBrandsData.fulfilled, (state, action: PayloadAction<Brand[]>) => {
				state.status = 'success'
				state.data = action.payload
			})
			.addCase(fetchBrandsData.rejected, (state, action) => {
				state.status = 'error'
				state.errorMessage = action.payload
			})
	}
})

export const { actions: brandsActions } = brandsSlice
export const { reducer: brandsReducer } = brandsSlice