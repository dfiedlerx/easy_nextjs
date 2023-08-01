/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchMock from 'jest-fetch-mock'

import apiMock from '@/mocks/api.mock'
import userMock from '@/mocks/user.mock'
import usersMock from '@/mocks/users.mock'
import { api } from '@/redux/api/api'
import userService from '@/services/user/user.service'

describe('@/services/user/user.service', () => {
  beforeEach((): void => {
    fetchMock.resetMocks()
  })

  it('should exists userService', () => {
    expect(userService).toBeTruthy()
  })

  it('should execute getUsers', () => {
    fetchMock.mockResponseOnce(JSON.stringify(usersMock))
    apiMock.store.dispatch<any>(api.endpoints.getUsers.initiate(null)).then(() => {
      expect(fetchMock).toBeCalledTimes(1)
      const request = fetchMock.mock.calls[0][0] as Request
      const { method, url } = request

      expect(method).toBe('GET')

      expect(url).toBe(`${process.env.NEXT_PUBLIC_API_BASE_URL}users`)
    })
  })

  it('should execute getUsersById', () => {
    const id = 1
    fetchMock.mockResponseOnce(JSON.stringify(userMock()))
    apiMock.store
      .dispatch<any>(api.endpoints.getUserById.initiate({ id }))
      .then(() => {
        expect(fetchMock).toBeCalledTimes(1)
        const request = fetchMock.mock.calls[0][0] as Request
        const { method, url } = request

        expect(method).toBe('GET')
        expect(url).toBe(`${process.env.NEXT_PUBLIC_API_BASE_URL}users/${id}`)
      })
  })
})
