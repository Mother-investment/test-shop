import { StateSchema } from 'app/providers/StoreProvider'

export const getBrandsData = (state: StateSchema) => state.brands.data || []