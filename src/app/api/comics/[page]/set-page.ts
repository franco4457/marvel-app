export const setPage = (page: number, query: string) => {
  const offset = `offset=${(page - 1) * 20}`

  return offset + `${query ? `&${query}` : ''}`
}
