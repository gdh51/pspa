let key = 'blink182',
    uid = 0,
    list = [];


export function genUid() {
    let nUid = key + (++uid);
    list.push(nUid);
    return nUid;
}

export function delUid(uid) {

    // 删除对应的uid
    list.splice(list.lastIndexOf(uid), 1);

    // 更新uid
    uid = list[list.length - 1];
}

export function initUidState(start = '') {
    uid = Number(start.slice(8)) + 1;
}
