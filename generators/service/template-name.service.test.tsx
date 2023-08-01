/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchMock from 'jest-fetch-mock'

import templateNameService from './template-name.service'

describe('@/services/template-name/template-name.service', () => {
  beforeEach((): void => {
    fetchMock.resetMocks()
  })

  it('should exists userService', () => {
    expect(templateNameService).toBeTruthy()
  })
})
