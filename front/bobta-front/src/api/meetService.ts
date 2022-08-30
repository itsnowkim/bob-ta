import {apiClient, apiImageClient} from './apiClients'
import {TimeTableForm, AddMeetForm} from '../utils'
export const getMeet = async (id: string) => {
  const {data} = await apiClient.get(`/meet/?id=${id}`)

  return data
}

export const createNewMeet = async ({username, formData}: TimeTableForm) => {
  const {data} = await apiImageClient.post(`/uploadfile/?username=${username}`, formData)

  return data
}

export const addToMeet = async ({username, formData, id}: AddMeetForm) => {
  const {data} = await apiImageClient.post(`/meet/?username=${username}&id=${id}`, formData)

  return data
}
