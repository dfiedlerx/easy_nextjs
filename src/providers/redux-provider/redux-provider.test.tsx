import ReduxProvider from '@/providers/redux-provider/redux-provider'
import { render, screen } from '@/utils/test-utils'

describe('@/providers/redux-provider/redux-provider', () => {
  it('should render Page', () => {
    render(
      <ReduxProvider>
        <div>CHILDREN</div>
      </ReduxProvider>
    )

    expect(screen.getByText('CHILDREN')).toBeInTheDocument()
  })
})
