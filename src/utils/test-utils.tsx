/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'
import {
  AnyAction,
  combineReducers,
  configureStore,
  EnhancedStore,
  Middleware,
  Reducer,
} from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'

import ReduxProvider from '@/providers/redux-provider/redux-provider'
import ThemeProvider from '@/providers/theme-provider/theme-provider'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode
}): ReactElement => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => render(ui, { wrapper: AllTheProviders, ...options })

function setupApiStore<
  A extends {
    reducer: Reducer<any, any>
    reducerPath: string
    middleware: Middleware
    util: { resetApiState(): any }
  },
  R extends Record<string, Reducer<any, any>> = Record<never, never>,
>(api: A, extraReducers?: R): { api: any; store: EnhancedStore } {
  /*
   * Modified version of RTK Query's helper function:
   * https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/src/query/tests/helpers.tsx
   */
  const getStore = (): EnhancedStore =>
    configureStore({
      reducer: combineReducers({
        [api.reducerPath]: api.reducer,
        ...extraReducers,
      }),
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          api.middleware
        ),
    })

  type StoreType = EnhancedStore<
    {
      api: ReturnType<A['reducer']>
    } & {
      [K in keyof R]: ReturnType<R[K]>
    },
    AnyAction,
    ReturnType<typeof getStore> extends EnhancedStore<any, any, infer M> ? M : never
  >

  const initialStore = getStore() as StoreType
  const refObj = {
    api,
    store: initialStore,
  }
  const store = getStore() as StoreType
  refObj.store = store

  return refObj
}

export * from '@testing-library/react'
export { customRender as render, setupApiStore }
