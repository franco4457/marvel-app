export type querySeted = string | undefined

export const setQueryCharacters = (searchParams:URLSearchParams):querySeted => {
  let querySeted : querySeted = ''
  const name = searchParams.get('name')
  if (name) {
    querySeted += `nameStartsWith=${name}`
  }
  return querySeted || undefined
}
