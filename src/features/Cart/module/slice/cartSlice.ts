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
		addProduct: (state, action: PayloadAction<Product | ProductCart>) => {
			if(state.productsCart.find(item => item.id === action.payload.id)) {
				state.productsCart = state.productsCart.map(item => ({
					...item,
					quantity: item.id === action.payload.id ? item.quantity + 1 : item.quantity
				}))
			}else {
				(state.productsCart).push({...action.payload, quantity: 1})
			}
			state.totalPrice += action.payload.price
        },
		reduceProduct: (state, action: PayloadAction<Product | ProductCart>) => {
			if(state.productsCart.find(item => item.id === action.payload.id)!.quantity > 1) {
				state.productsCart = state.productsCart.map(item => ({
					...item,
					quantity: item.id === action.payload.id ? item.quantity + 1 : item.quantity
				}))
				state.totalPrice -= action.payload.price
			}
        },
		deleteProduct: (state, action: PayloadAction<Product | ProductCart>) => {
            state.productsCart = state.productsCart.filter(item => item.id != action.payload.id)
			state.totalPrice -= action.payload.price
        },
		clearCart: (state) => {
            state.productsCart = []
			state.totalPrice = 0
        }
	}
})

export const { actions: cartActions } = cartSlice
export const { reducer: cartReducer } = cartSlice