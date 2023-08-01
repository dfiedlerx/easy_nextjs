'use client'

import { ReactElement } from 'react'
import Image from 'next/image'

import { api } from '@/redux/api/api'
import User from '@/types/user/user.type'

export default function Page(): ReactElement {
  const { isLoading, isFetching, data, error } = api.useGetUsersQuery(null)

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      {error && <p>Oh no, there was an error</p>}

      {isLoading || (isFetching && <p>Loading...</p>)}
      {data && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {data.map((user: User) => (
            <div
              key={user.id}
              style={{ border: '1px solid #ccc', textAlign: 'center' }}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                height="180"
                width="180"
                style={{ margin: 'auto' }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
