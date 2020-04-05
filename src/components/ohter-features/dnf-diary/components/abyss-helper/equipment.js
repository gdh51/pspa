const SORT = [
    'Weapon',
    'Auxiliary',
    'Jewelry',
    'Dress'
];

const EquipmentNumber = {
    Weapon: 5,
    Auxiliary: 3,
    Jewelry: 3,
    Dress: 5
};

class Equipment {
    constructor (name, sort, src) {
        this.name = name;
        this.sort = SORT[sort];
        this.src = src;
    }
}

class EquipmentSort {
    constructor(sort) {

        // 一类装备许愿的最大数量限制
        this.limit = EquipmentNumber[sort];
    }
}