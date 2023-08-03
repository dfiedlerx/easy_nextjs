/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/redux/api/api'
import store from '@/redux/store/store'

export default async function fetchFromApi(
  queryName: string,
  params: any = null
): Promise<any> {
  return store().dispatch(api.endpoints[queryName].initiate(params))
}
