export const setQueryComic = (searchParams:URLSearchParams) => {
  let query = ''
  const title = searchParams.get('title')
  if (title) {
    query += `&titleStartsWith=${title}`
  }
  return query
}
