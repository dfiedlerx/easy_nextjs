import Page from '@/app/(consumer)/product/page'
import { render, screen } from '@/utils/test-utils'

describe('@/app/(consumer)/product/page', () => {
  it('should render Page', () => {
    render(<Page />)
    expect(screen.getByText('Product Page')).toBeInTheDocument()
  })
})
