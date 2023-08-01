import userEvent from '@testing-library/user-event'

import { render, screen } from '@/utils/test-utils'

import DarkModeButton from './dark-mode-button.component'

describe('Home', () => {
  it('should basic render whithout error', () => {
    const { container } = render(<DarkModeButton />)

    expect(container).toBeInTheDocument()
  })

  it('should basic render whithout error with dark mode', async () => {
    render(<DarkModeButton />)

    const buttonToogle = screen.getByRole('button')

    await userEvent.click(buttonToogle)

    expect(buttonToogle).toBeInTheDocument()
  })

  it('should basic render whithout error with light mode after change', async () => {
    render(<DarkModeButton />)

    const buttonToogle = screen.getByRole('button')

    //Go to DarkMode and back for lightMode
    await userEvent.click(buttonToogle)
    await userEvent.click(buttonToogle)

    expect(buttonToogle).toBeInTheDocument()
  })
})
