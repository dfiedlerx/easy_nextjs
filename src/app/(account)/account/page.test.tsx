import Page from '@/app/(account)/account/page'
import { render, screen } from '@/utils/test-utils'

describe('@/app/(account)/account/page', () => {
  it('should render Page', () => {
    render(<Page />)
    expect(screen.getByText('account')).toBeInTheDocument()
  })
})
