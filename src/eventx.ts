/**
 * @name: event-x
 * @author: Phong Vu
 */

const LISTENERS = Symbol('event-x-listener')
export function listeners(target: object): Set<any> {
    if (!Reflect.has(target, LISTENERS))
        Reflect.defineProperty(target, LISTENERS, { value: new Set() })
    return Reflect.get(target, LISTENERS)
}

export function listen(target: object, type: string, callback: void): () => void {
    const listener = { type, callback }
    listeners(target).add(listener)
    return function dispose() {
        listeners(target).delete(listener)
    }
}

export function emit(target: object, type: string, ...args): void {
    listeners(target).forEach(listener => {
        if (listener.type === type)
            Reflect.apply(listener.callback, target, args)
    })
}
export default { listeners, listen, emit }