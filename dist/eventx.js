"use strict";
/**
 * @name: event-x
 * @author: Phong Vu
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LISTENERS = Symbol('event-x-listener');
function listeners(target) {
    if (!Reflect.has(target, LISTENERS))
        Reflect.defineProperty(target, LISTENERS, { value: new Set() });
    return Reflect.get(target, LISTENERS);
}
exports.listeners = listeners;
function listen(target, type, callback) {
    const listener = { type, callback };
    listeners(target).add(listener);
    return function dispose() {
        listeners(target).delete(listener);
    };
}
exports.listen = listen;
function emit(target, type, ...args) {
    listeners(target).forEach(listener => {
        if (listener.type === type)
            Reflect.apply(listener.callback, target, args);
    });
}
exports.emit = emit;
exports.default = { listeners, listen, emit };
//# sourceMappingURL=eventx.js.map