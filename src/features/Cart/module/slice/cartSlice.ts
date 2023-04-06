import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartSchema, ProductCart } from '../types/cartSchema'
import { Product } from 'entities/Products'

const initialState: CartSchema = {
	productsCart: [],
	totalPrice: 0,
	currency: 'USD'
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state: CartSchema, action: PayloadAction<ProductCart | Product>) => {
			if(state.productsCart.find(item => item.id === action.payload.id)) {
				state.productsCart = state.productsCart.map(item => {
					return item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
				})
			}else {
				(state.productsCart).push({ ...action.payload, quantity: 1 })
			}
			state.totalPrice += action.payload.price
		},
		setProductQuantity: (state, action: PayloadAction<ProductCart>) => {
			state.productsCart = state.productsCart.map(item => {
				return item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
			})
			state.totalPrice = state.productsCart.reduce((acc, item) => acc += item.price * item.quantity, 0)
		},
		deleteProduct: (state, action: PayloadAction<ProductCart>) => {
			state.productsCart = state.productsCart.filter(item => item.id != action.payload.id)
			state.totalPrice -= (action.payload.price * action.payload.quantity)
		},
		clearCart: (state) => {
			state.productsCart = []
			state.totalPrice = 0
		}
	}
})

export const { actions: cartActions } = cartSlice
export const { reducer: cartReducer } = cartSlice