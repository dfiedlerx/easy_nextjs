'use client'

import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor } from '@/redux/persistor/persistor'
import getStore from '@/redux/store/store'

export default function ReduxProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <Provider store={getStore()}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
