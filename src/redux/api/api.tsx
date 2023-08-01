import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import userService from '@/services/user/user.service'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const api: any = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    ...userService(builder),
  }),
})

export const { endpoints, reducerPath, reducer, middleware } = api
