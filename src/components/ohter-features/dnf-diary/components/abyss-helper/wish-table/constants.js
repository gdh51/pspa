export const SORT = [
    'Weapon',
    'Auxiliary',
    'Jewelry',
    'Dress'
];

export const SortToName = {
    Weapon: '武器区域',
    Auxiliary: '辅助装备区域',
    Jewelry: '首饰装备区域',
    Dress: '左侧装备区域'
};

// 具体表格对应的装备数量限制
export const EquipmentNumber = {
    Weapon: 5,
    Auxiliary: 3,
    Jewelry: 3,
    Dress: 5
};

// 表格能容纳的装备模型
export const Schema = {
    Dress: {
        belt: false,
        shoulder: false,
        coat: false,
        pants: false,
        shoes: false,
    },

    Jewelry: {
        necklace: false,
        ring: false,
        bracelet: false
    },

    Auxiliary: {
        auxiliary: false,
        miscarcand: false,
        earrings: false
    },

    Weapon: {
        none: false
    }
};