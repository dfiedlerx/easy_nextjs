import { Storage } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import createNoopStorage from '@/redux/createNoopStorage/createNoopStorage'

const getStorage = (): Storage =>
  typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default getStorage
