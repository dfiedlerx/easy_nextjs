import { Persistor, persistStore } from 'redux-persist'

import getStore from '@/redux/store/store'

export const persistor: Persistor = persistStore(getStore())
