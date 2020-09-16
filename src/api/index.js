import axios from 'axios'
import setInterceptors from '@/api/common/interceptors'

export const instance = () => {
  const createInstance = axios.create({
    baseURL: "http://localhost:3000/api/"
  })
  return setInterceptors(createInstance)
}