"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listeners = Symbol("listeners");
function on(target, type, callback) {
    if (!target[listeners])
        target[listeners] = [];
    target[listeners].push({ type, callback });
    return target;
}
exports.on = on;
function off(target, type) {
    if (target[listeners])
        target[listeners] = !type ? [] : target[listeners].filter(listener => (listener.type !== type && listener.callback !== type));
    return target;
}
exports.off = off;
function emit(target, type, ...args) {
    return new Promise((resolve, reject) => {
        if (target[listeners])
            Promise.all(target[listeners].map(listener => {
                if (listener.type === type)
                    return Reflect.apply(listener.callback, null, args);
            })).then(resolve).catch(reject);
        else
            resolve();
    });
}
exports.emit = emit;
exports.default = { on, off, emit };
//# sourceMappingURL=eventx.js.map