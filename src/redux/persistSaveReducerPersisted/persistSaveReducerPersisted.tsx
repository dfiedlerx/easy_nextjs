import { PersistConfig } from 'redux-persist'
import persistReducer from 'redux-persist/lib/persistReducer'

import { api } from '@/redux/api/api'
import persistSaveReducer from '@/redux/features/persistSave/persistSave.feature'
import getStorage from '@/redux/getStorage/getStorage'
import CounterState from '@/types/redux/features/counter.type'

const persistConfig: PersistConfig<CounterState> = {
  key: 'root',
  storage: getStorage(),
  blacklist: [api.reducerPath],
}

const persistSaveReducerPersisted = persistReducer(persistConfig, persistSaveReducer)

export default persistSaveReducerPersisted
