import { MySQL } from '../../main/service/utils/mysqlutils'

export async function addPlayer(name: string, rating: number) {
  try {
    const query = 'INSERT INTO players (name, rating) VALUES (?, ?)'
    const values = [name, rating]
    const result = await MySQL.runQuery(query, values)
    console.log('user added' + result)
  } catch (error) {
    console.error(error)
  }
}
