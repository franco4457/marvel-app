import { querySeted } from '../set-query-characters'

export const setPage = (page: number, query: querySeted) => {
  const offset = `offset=${(page - 1) * 20}`

  return offset + `${query ? `&${query}` : ''}`
}
