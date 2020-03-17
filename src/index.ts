export function normalizeArray(value: any) {
    return [].concat(value).filter(Boolean)
  }

export function fullTypeOf(value: any) {
    return Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase()
}
