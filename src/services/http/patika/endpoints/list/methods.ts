import service from '../../instance'
import { ListRequestPayload } from './types'



export const list = (payload: ListRequestPayload) => service.post('board', payload)

export const getListAll = () => service.get('list')