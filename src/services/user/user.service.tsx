import { Builder } from '@/types/redux/builder.type'
import User from '@/types/user/user.type'

const userService = (builder: Builder): object => {
  return {
    getUsers: builder.query<User[], null>({
      query: () => 'users',
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }: { id: string | number }) => `users/${id}`,
    }),
  }
}

export default userService
