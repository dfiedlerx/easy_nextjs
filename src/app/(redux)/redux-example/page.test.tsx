import userEvent from '@testing-library/user-event'

import Page from '@/app/(redux)/redux-example/page'
import useRouterMock, { pushMock } from '@/mocks/useRouter.mock'
import { resetStore } from '@/redux/store/store'
import { render, screen, waitFor } from '@/utils/test-utils'

jest.mock('next/navigation', () => ({
  useRouter() {
    return useRouterMock
  },
}))

describe('@/app/(redux)/redux-example/page', () => {
  beforeEach(() => {
    resetStore()
  })

  it('should render Page', () => {
    render(<Page />)

    expect(screen.queryByRole('main')).toBeInTheDocument()
  })

  it('should increment when clicked', async () => {
    render(<Page />)
    expect(screen.getByText(0)).toBeInTheDocument()

    const button = screen.getByText('increment')
    userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText(1)).toBeInTheDocument()
    })
  })

  it('should decrement when clicked', async () => {
    render(<Page />)
    expect(screen.getByText(0)).toBeInTheDocument()

    const button = screen.getByText('decrement')
    userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText(-1)).toBeInTheDocument()
    })
  })

  it('should reset when clicked', async () => {
    render(<Page />)
    expect(screen.getByText(0)).toBeInTheDocument()

    const decrement = screen.getByText('decrement')
    await userEvent.click(decrement)

    expect(screen.getByText(-1)).toBeInTheDocument()

    const buttonReset = screen.getByText('reset')
    userEvent.click(buttonReset)

    await waitFor(() => {
      expect(screen.getByText('0')).toBeInTheDocument()
    })
  })

  it('should redirect when clicked', async () => {
    render(<Page />)
    expect(screen.getByText(0)).toBeInTheDocument()

    const decrement = screen.getByText('redirect')
    await userEvent.click(decrement)

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/redux-persist-example')
    })
  })
})
