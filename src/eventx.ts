const IDENTITY = Symbol('event-x')
export type Listener = {
  target: object
  type: string
  callback(): any
}
export function listeners(target: object): Set<any> {
  if (!Reflect.has(target, '_listeners'))
    Reflect.defineProperty(target, '_listener', { value: new Set() })
  return Reflect.get(target, '_listeners')
}
export function listen(target: object, type: string, callback): void {
  const listener: Listener = { target, type, callback }
  listener[IDENTITY] =
  listeners(target).add(listener)
}

export function emit(target: object, type: string, ...args): void {
  listeners(target).forEach((listener: Listener) => {
    if (listener.type === type)
      Reflect.apply(listener.callback, target, args)
  })
}