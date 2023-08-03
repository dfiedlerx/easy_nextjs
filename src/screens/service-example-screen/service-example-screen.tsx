/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'
import React, { FC, useState } from 'react'
import Image from 'next/image'

import { api } from '@/redux/api/api'
import User from '@/types/user/user.type'
import fetchFromApi from '@/utils/fetchFromApi'

interface ServiceExampleScreenProps {
  ssdata: User[]
}

const { useGetUsersQuery } = api

const ServiceExampleScreen: FC<ServiceExampleScreenProps> = ({ ssdata }) => {
  const [data, setData] = useState(ssdata)
  const { data: result } = useGetUsersQuery(null)

  async function test(): Promise<void> {
    const newItems = [...data, ...result, ...(await fetchFromApi('getUsers')).data]

    setData(newItems)
  }
  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      {data && (
        <div>
          <h2 onClick={test}>Guys</h2>
          {data.map((user: User, index: number) => (
            <div
              key={`${user.id}/${index}`}
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

export default ServiceExampleScreen
