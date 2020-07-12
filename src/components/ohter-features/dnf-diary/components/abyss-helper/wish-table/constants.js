// 套装类型
export const SORT = [
    'Weapon',
    'Auxiliary',
    'Jewelry',
    'Dress',
    'Mixin_1',
    'Mixin_2',
    'Mixin_3'
];

export const SortToName = {
    Weapon: '武器区域',
    Auxiliary: '辅助装备区域',
    Jewelry: '首饰装备区域',
    Dress: '左侧装备区域'
};

// 混搭区域
const Mixin = ['Mixin_1', 'Mixin_2', 'Mixin_3'];

Mixin.forEach(name => (SortToName[name] = '三件套区域'))

// 表格能容纳的装备模型
export const Schema = {
    Dress: {
        belt: false,
        shoulder: false,
        coat: false,
        pants: false,
        shoes: false,
        myth: false
    },

    Jewelry: {
        necklace: false,
        ring: false,
        bracelet: false,
        myth: false
    },

    Auxiliary: {
        auxiliary: false,
        miscarcand: false,
        earrings: false,
        myth: false
    },

    Weapon: {
        none: false
    },

    Mixin_1: {
        shoes: false,
        ring: false,
        earrings: false
    },

    Mixin_2: {
        pants: false,
        bracelet: false,
        miscarcand: false
    },

    Mixin_3: {
        coat: false,
        necklace: false,
        auxiliary: false
    }
};

Object.freeze(Schema);