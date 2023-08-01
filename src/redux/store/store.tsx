import { configureStore } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

import { api } from '@/redux/api/api'
import counterReducer from '@/redux/features/counter/counter.feature'
import persistSaveReducerPersisted from '@/redux/persistSaveReducerPersisted/persistSaveReducerPersisted'

const createStore = (): ToolkitStore => {
  return configureStore({
    reducer: {
      //Reducers
      counterReducer,

      //Persisted Reducers
      persistSaveReducerPersisted,

      //Services
      [api?.reducerPath]: api.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([api.middleware]),
  })
}

let store = createStore()

export const resetStore = (): ToolkitStore => (store = createStore())

export default (): ToolkitStore => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
