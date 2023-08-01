import { api, endpoints, middleware, reducer, reducerPath } from '@/redux/api/api'

describe('@/redux/api/api', () => {
  it('should exists api', () => {
    expect(api).toBeTruthy()
  })

  it('should exists endpoints', () => {
    expect(endpoints).toBeTruthy()
  })

  it('should exists reducerPath', () => {
    expect(reducerPath).toBeTruthy()
  })

  it('should exists reducer', () => {
    expect(reducer).toBeTruthy()
  })

  it('should exists middleware', () => {
    expect(middleware).toBeTruthy()
  })
})
