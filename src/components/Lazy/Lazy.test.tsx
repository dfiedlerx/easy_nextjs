import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import Lazy from './Lazy'

describe('<Lazy />', () => {
  test('it should mount', () => {
    render(<Lazy />)

    const lazy = screen.getByTestId('Lazy')

    expect(lazy).toBeInTheDocument()
  })
})
