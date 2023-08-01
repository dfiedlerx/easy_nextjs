import { useDispatch } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

import type { AppDispatch } from '@/redux/store/store'

const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>()

export default useAppDispatch
