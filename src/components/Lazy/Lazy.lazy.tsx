import React, { lazy, ReactElement, Suspense } from 'react'

const LazyLazy = lazy(() => import('./Lazy'))

const Lazy = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
): ReactElement => (
  <Suspense fallback={null}>
    <LazyLazy {...props} />
  </Suspense>
)

export default Lazy
