"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IDENTITY = Symbol('event-x');
function listeners(target) {
    if (!Reflect.has(target, '_listeners'))
        Reflect.defineProperty(target, '_listener', { value: new Set() });
    return Reflect.get(target, '_listeners');
}
exports.listeners = listeners;
function listen(target, type, callback) {
    const listener = { target, type, callback };
    listener[IDENTITY] =
        listeners(target).add(listener);
}
exports.listen = listen;
function emit(target, type, ...args) {
    listeners(target).forEach((listener) => {
        if (listener.type === type)
            Reflect.apply(listener.callback, target, args);
    });
}
exports.emit = emit;
//# sourceMappingURL=eventx.js.map