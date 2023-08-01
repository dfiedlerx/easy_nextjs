import ThemeProvider from '@/providers/theme-provider/theme-provider'
import { render, screen, waitFor } from '@/utils/test-utils'

describe('@/providers/theme-provider/theme-provider', () => {
  it('should render Page', async () => {
    render(
      <ThemeProvider>
        <div>CHILDREN</div>
      </ThemeProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('CHILDREN')).toBeInTheDocument()
    })
  })
})
