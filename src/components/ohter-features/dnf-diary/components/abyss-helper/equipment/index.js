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
    }) {
        this.name = name;
        this.sort = SORT[sort];
        this.part = part;
        this.uid = uid;
        this.myth = !!myth;
        this.selected = selected;
    }
}

// 这里暴露一个靠装备uid就能创建装备信息的接口
export function createEquipment(uid) {
    return new Equipment(Equipment.map[uid]);
}

// 该方法用于还原lc中存储的装备对象
export function restoreEquipment(opt) {
    return new Equipment(opt);
}

export function initEquipment(map) {

    // 为了方便管理/查询，装备的uid，同其在数组的下标相同
    Equipment.map = [...map.map(pack => pack.eps)];
}

class Suit {
    constructor (opt) {
        this.name = opt.name;
        this.eps = initEps(opt.eps);
    }
}

function initEps (eps) {
    return eps.map(ep => restoreEquipment(ep));
}

export function createSuit (suits) {
    return suits.map(suit => new Suit(suit));
}