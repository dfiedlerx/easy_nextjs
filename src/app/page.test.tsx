import Page from '@/app/page'
import { render, screen } from '@/utils/test-utils'

describe('@/app/page', () => {
  it('should render Page', () => {
    render(<Page />)
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })
})
