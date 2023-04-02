import { StateSchema } from 'app/providers/StoreProvider'

export const getCurrencyCart = (state: StateSchema) => state.cart.currency || 'USD'