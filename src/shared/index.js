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

export function extend(to, from) {
    for (let key in from) {
        if (Object.prototype.hasOwnProperty.call(from, key)) {
            to[key] = from[key];
        }
    }

    return to;
}

// 深度克隆对象
export function deepClone(from) {
    let to = {};
    for (let key in from) {
        if (Object.prototype.hasOwnProperty.call(from, key)) {
            let currentVal = from[key],
                cloneVal = currentVal;
            if (Array.isArray(currentVal)) {
                cloneVal = currentVal.map(val => deepClone(val));
            } else if (typeof currentVal === 'object') {
                cloneVal = deepClone(currentVal);
            }

            to[key] = cloneVal;
        }
    }

    return to;
}
