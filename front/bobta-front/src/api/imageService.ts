import axios from 'axios'
import {apiImageClient} from './apiClients'

export const uploadTimeTableImage = async (formData: FormData) => {
  const {data} = await apiImageClient.post('/uploadfile/', formData)

  return data
}
