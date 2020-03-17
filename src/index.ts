
export function normalizeArray<T>(value?: T | T[]): T[] {
  const empty = [] as T[]
  if (!value) {
    return empty
  }
  return empty.concat(value).filter(Boolean)
}

export function fullTypeOf(value: any) {
    return Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase()
}
