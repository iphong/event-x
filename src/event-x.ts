const listeners = Symbol("listeners");

export function on(target: object, type: string, callback: Function): object {
  if (!target[listeners])
    target[listeners] = [];
  target[listeners].push({ type, callback });
  return target
}
export function off(target: object, type?: string | Function): object {
  if (target[listeners])
    target[listeners] = !type ? [] : target[listeners].filter(listener => (listener.type !== type && listener.callback !== type));
  return target
}
export function emit(target: object, type: string, ...args): Promise<Array<any>> {
  return new Promise((resolve, reject) => {
    if (target[listeners])
      Promise.all(target[listeners].map(listener => {
        if (listener.type === type)
          return Reflect.apply(listener.callback, null, args);
      })).then(resolve).catch(reject);
    else resolve();
  });
}
export default { on, off, emit }
