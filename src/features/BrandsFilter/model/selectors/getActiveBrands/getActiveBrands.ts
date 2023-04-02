import { StateSchema } from 'app/providers/StoreProvider'

export const getActiveBrands = (state: StateSchema) => state.brands.activeBrands || []