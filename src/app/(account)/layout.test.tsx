import RootLayout from '@/app/(account)/layout'
import { render, screen } from '@/utils/test-utils'

describe('@/app/(account)/layout', () => {
  it('should render RootLayout with children', () => {
    render(
      <RootLayout>
        <div>CHILDREN</div>
      </RootLayout>
    )
    expect(screen.getByText('CHILDREN')).toBeInTheDocument()
  })
})
