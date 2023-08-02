'use client'

import { ReactElement } from 'react'
import { useRouter } from 'next/navigation'

import {
  decrement,
  increment,
  reset,
} from '@/redux/features/persistSave/persistSave.feature'
import useAppDispatch from '@/redux/selectors/useAppDispatch/useAppDispatch'
import useAppSelector from '@/redux/selectors/useAppSelector/useAppSelector'

export default function Home(): ReactElement {
  const count = useAppSelector((state) => state.persistSaveReducerPersisted.value)
  const dispatch = useAppDispatch()
  const { push } = useRouter()

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1>PERSISTED STATE REDUX</h1>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }}>
          decrement
        </button>
        <button onClick={() => dispatch(reset())} style={{ marginInline: 16 }}>
          reset
        </button>
        <button
          onClick={() => {
            push('/redux-example')
          }}
        >
          redirect
        </button>
      </div>
    </main>
  )
}
