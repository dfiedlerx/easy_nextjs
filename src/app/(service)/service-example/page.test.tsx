import Page from '@/app/(service)/service-example/page'
import usersMock from '@/mocks/users.mock'
import { act, render, screen, waitFor } from '@/utils/test-utils'

describe('@/app/(service)/service-example/page with User', () => {
  beforeEach((): void => {
    fetchMock.resetMocks()
    fetchMock.mockResponse(JSON.stringify(usersMock))
  })

  it('should render a user', async () => {
    await act(() => {
      render(<Page />)
    })

    await waitFor(() => {
      expect(screen.queryAllByText('Leanne Graham')['0']).toBeInTheDocument()
    })
  })
})

describe('@/app/(service)/service-example/page without User', () => {
  beforeEach((): void => {
    fetchMock.resetMocks()
    fetchMock.mockResponse(JSON.stringify([]))
  })

  it('should render Page', async () => {
    fetchMock.mockResponse(JSON.stringify([]))
    await act(() => {
      render(<Page />)
    })

    expect(screen.queryByRole('main')).toBeInTheDocument()
  })
})
