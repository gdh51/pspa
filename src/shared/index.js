export function on(type, target, cb, capture = false) {
    target.addEventListener(type, cb, capture);
}

export function off(type, target, cb) {
    target.removeEventListener(type, cb);
}

export function trigger(el, type) {
    let event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    el.dispatchEvent(event);
}
