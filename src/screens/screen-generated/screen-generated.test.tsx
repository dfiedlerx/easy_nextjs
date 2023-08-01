import React from 'react'
import { render, screen } from '@testing-library/react'

import ScreenGenerated from '@/screens/screen-generated/screen-generated'

import '@testing-library/jest-dom/extend-expect'

describe('<ScreenGenerated />', () => {
  test('it should mount', () => {
    render(<ScreenGenerated />)

    const screenGenerated = screen.getByTestId('ScreenGenerated')

    expect(screenGenerated).toBeInTheDocument()
  })
})
