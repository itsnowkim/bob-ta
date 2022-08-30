import {apiClient} from './apiClients'
export const getMeet = async (id: string) => {
  const {data} = await apiClient.get(`/meet/?id=${id}`)

  return data
}
