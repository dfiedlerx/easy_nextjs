import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import Page from './page'

describe('<PageGenerated />', () => {
  test('it should mount', () => {
    render(<Page />)

    const pageGenerated = screen.getByText('Page')

    expect(pageGenerated).toBeInTheDocument()
  })
})
