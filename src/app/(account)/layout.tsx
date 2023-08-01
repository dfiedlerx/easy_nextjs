import { ReactElement, ReactNode } from 'react'

import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <div lang="en">
      <div>Account header</div>
      <div>
        <div>{children}</div>
      </div>
      <div>Account footer</div>
    </div>
  )
}
