export function normalizeSize (size) {
    if (typeof size === 'number') {
        return size + 'px';
    }

    if (typeof size === 'string') {
        return size;
    }

    throw Error('TypeError');
}