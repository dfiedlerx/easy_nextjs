'use client'

import { ReactElement } from 'react'

import Lazy from '@/components/Lazy/Lazy.lazy'
import {
  decrement,
  increment,
  reset,
} from '@/redux/features/counter/counter.feature'
import useAppDispatch from '@/redux/selectors/useAppDispatch/useAppDispatch'
import useAppSelector from '@/redux/selectors/useAppSelector/useAppSelector'

export default function Page(): ReactElement {
  const count = useAppSelector((state) => state.counterReducer.value)
  const dispatch = useAppDispatch()

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }}>
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
        {parseInt(count) === 1 && <Lazy />}
      </div>
    </main>
  )
}
