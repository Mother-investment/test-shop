import { StateSchema } from 'app/providers/StoreProvider'

export const getProductsCart = (state: StateSchema) => state.cart.productsCart || []