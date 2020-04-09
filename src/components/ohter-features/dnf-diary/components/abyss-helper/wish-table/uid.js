let key = 'blink182',
    initUid = 0,
    uid = 0,
    list = [];


export function genUid() {
    let nUid = key + (++uid);
    list.push(uid);
    return nUid;
}

export function delUid(targetUid) {

    // 无序号则直接删除
    if (!list.length) {
        uid = initUid;
        return;
    } else {
        uid = Number(targetUid.slice(8));

        // 删除对应的uid
        list.splice(list.lastIndexOf(targetUid), 1);
        if (list.length) {
            uid = list[list.length - 1];
        } else {
            uid = initUid;
        }
    }
}

export function initUidState(start = '') {
    initUid = uid = Number(start.slice(8));
}
