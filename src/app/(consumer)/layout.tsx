import { ReactElement, ReactNode } from 'react'

import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <div>
      <div>Header Consumer</div>
      <div>{children}</div>
      <div>Footer Consumer</div>
    </div>
  )
}
