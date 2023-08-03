import { configureStore } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

import { api } from '@/redux/api/api'
import counterReducer from '@/redux/features/counter/counter.feature'

const createStore = (): ToolkitStore => {
  return configureStore({
    reducer: {
      //Reducers
      counterReducer,

      //Services
      [api?.reducerPath]: api.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([api.middleware]),
  })
}

let store = createStore()

export const resetStore = (): ToolkitStore => (store = createStore())

export default (): ToolkitStore => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
