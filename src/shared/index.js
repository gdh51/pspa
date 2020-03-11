export function on(type, target, cb, capture = false) {
    target.addEventListener(type, cb, capture);
}

export function off(type, target, cb) {
    target.removeEventListener(type, cb);
}
