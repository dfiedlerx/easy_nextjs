'use client'

import { ReactElement, ReactNode } from 'react'
import { ThemeProvider as NMThemeProvider } from 'next-themes'

export default function ThemeProvider({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <NMThemeProvider>{children}</NMThemeProvider>
}
