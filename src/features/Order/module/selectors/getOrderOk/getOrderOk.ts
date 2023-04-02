import { StateSchema } from 'app/providers/StoreProvider'

export const getOrderOk = (state: StateSchema) => state.order.result || ''