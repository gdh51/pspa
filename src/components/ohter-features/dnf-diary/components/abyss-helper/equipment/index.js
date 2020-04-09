import {
    SORT
} from '../wish-table/constants'

class Equipment {
    constructor({
        name,
        sort,
        part,
        uid,
        myth,
        selected = false
    }, init) {
        this.name = name;
        this.sort = typeof sort === 'number' ? SORT[sort] : sort;
        this.part = part;
        this.uid = uid;
        this.myth = !!myth;
        this.selected = init ? false : selected;
    }
}

// 这里暴露一个靠装备uid就能创建装备信息的接口
export function createEquipment(uid) {
    return new Equipment(Equipment.map[uid], true);
}

// 该方法用于还原lc中存储的装备对象
export function restoreEquipment(opt) {
    return new Equipment(opt);
}

export function initEquipment(map) {
    if (Equipment.map) return;

    // 为了方便管理/查询，装备的uid，同其在数组的下标相同
    Equipment.map = [].concat(...map.map(pack => pack.eps));
}
