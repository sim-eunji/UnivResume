import { instance } from '@/api/index'

export const university = {
  list() {
      return instance.post('university/list');
  }
}