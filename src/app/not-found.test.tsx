import NotFound from '@/app/not-found'
import { render, screen } from '@/utils/test-utils'

describe('@/app/not-found', () => {
  it('should render Page', () => {
    render(<NotFound />)

    expect(screen.getByText('Not Found!')).toBeInTheDocument()
  })
})
