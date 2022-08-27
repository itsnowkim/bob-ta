import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL

export const apiImageClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'multipart/form-data',
  },
})

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
})
