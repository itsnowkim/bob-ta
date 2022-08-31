import axios from 'axios'
import {apiImageClient} from './apiClients'
import {TimeTableForm} from '../utils'

export const uploadTimeTableImage = async ({username, formData}: TimeTableForm) => {
  const {data} = await apiImageClient.post(`/uploadfile/?username=${username}`, formData)

  return data
}
