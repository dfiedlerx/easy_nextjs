import { Storage } from 'redux-persist'

/* eslint-disable @typescript-eslint/no-unused-vars */
const createNoopStorage = (): Storage => {
  return {
    getItem(_key: never) {
      return Promise.resolve(null)
    },
    setItem(_key: never, value: never) {
      return Promise.resolve(value)
    },
    removeItem(_key: never) {
      return Promise.resolve()
    },
  }
}

export default createNoopStorage
