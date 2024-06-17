import { v4 as uuidv4 } from 'uuid'
import { sendIpc, onceIpc } from '../../../preload/ipc'

export const MySQL = {
  runQuery: async <T>(query: string, values?: unknown[]): Promise<T> => {
    const requestId: string = uuidv4()
    return new Promise<T>((resolve, reject) => {
      onceIpc(requestId, (_, result) => {
        if (result.error) {
          reject(new Error(result.error))
        } else {
          resolve(result as T)
        }
      })
      sendIpc('execute-query', query, values, requestId)
    })
  },
}
