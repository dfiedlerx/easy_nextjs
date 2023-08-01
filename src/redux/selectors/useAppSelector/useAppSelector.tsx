import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { RootState } from '@/redux/store/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
