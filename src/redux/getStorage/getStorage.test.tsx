import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import getStorage from '@/redux/getStorage/getStorage'

import createNoopStorage from '../createNoopStorage/createNoopStorage'

describe('@/redux/store/store local', () => {
  it('#without window', () => {
    expect(JSON.stringify(getStorage())).toEqual(
      JSON.stringify(createWebStorage('local'))
    )
  })
})

describe('@/redux/store/store not local', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global.window
  })

  it('#without window', () => {
    expect(JSON.stringify(getStorage())).toEqual(JSON.stringify(createNoopStorage()))
  })
})
