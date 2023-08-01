import RootLayout from '@/app/(consumer)/layout'
import { render, screen } from '@/utils/test-utils'

describe('@/app/(consumer)/layout', () => {
  it('should render RootLayout with children', () => {
    render(
      <RootLayout>
        <div>CHILDREN</div>
      </RootLayout>
    )
    expect(screen.getByText('CHILDREN')).toBeInTheDocument()
  })
})
