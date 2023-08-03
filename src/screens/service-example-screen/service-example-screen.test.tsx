import userEvent from '@testing-library/user-event'

import usersMock from '@/mocks/users.mock'
import fetchFromApi from '@/utils/fetchFromApi'
import { act, render, screen, waitFor } from '@/utils/test-utils'

import ServiceExampleScreen from './service-example-screen'

jest.mock('@/utils/fetchFromApi', () => jest.fn().mockReturnValue({ data: [] }))

describe('@/app/(service)/service-example/page with User', () => {
  beforeEach((): void => {
    fetchMock.resetMocks()
    fetchMock.mockResponse(JSON.stringify(usersMock))
  })

  it('should render a user', async () => {
    await act(() => {
      render(<ServiceExampleScreen ssdata={usersMock} />)
    })

    await waitFor(() => {
      expect(screen.queryAllByText('Leanne Graham')['0']).toBeInTheDocument()
    })
  })

  it('should call getUsers on guys click', async () => {
    await act(() => {
      render(<ServiceExampleScreen ssdata={usersMock} />)
    })

    const guys = screen.getByText('Guys')

    userEvent.click(guys)

    await waitFor(() => {
      expect(fetchFromApi).toBeCalledWith('getUsers')
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
      render(<ServiceExampleScreen ssdata={[]} />)
    })

    expect(screen.queryByRole('main')).toBeInTheDocument()
  })
})
