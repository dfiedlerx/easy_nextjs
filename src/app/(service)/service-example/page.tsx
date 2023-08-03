import { ReactElement } from 'react'

import ServiceExampleScreen from '@/screens/service-example-screen/service-example-screen'
import fetchFromApi from '@/utils/fetchFromApi'

export default async function Page(): Promise<ReactElement> {
  return <ServiceExampleScreen ssdata={(await fetchFromApi('getUsers')).data} />
}
