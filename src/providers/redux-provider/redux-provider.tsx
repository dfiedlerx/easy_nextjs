'use client'

import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'

import getStore from '@/redux/store/store'

export default function ReduxProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <Provider store={getStore()}>{children}</Provider>
}
