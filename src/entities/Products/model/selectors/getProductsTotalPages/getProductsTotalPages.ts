import { StateSchema } from 'app/providers/StoreProvider'

export const getProductsTotalPages = (state: StateSchema) => state.products.totalPages || 0