import { StateSchema } from 'app/providers/StoreProvider'

export const getTotalPrice = (state: StateSchema) => state.cart.totalPrice || 0