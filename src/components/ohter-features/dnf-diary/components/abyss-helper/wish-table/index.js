import {
    SORT,
    SortToName,
    EquipmentNumber,
    Schema
}
from './constants'
import {
    extend
} from '../../../../../../shared/index'
import {
    createEquipment,
    restoreEquipment
}
from '../equipment/index'
import {
    genUid,
    delUid
} from './uid'

// 这个类的初始化必须要等到TableManager实例化之后
function WishTable({
    epList = [],
    sort = SORT[3],
    uid
}) {

    // 原始数据作为存储在lc中的数据
    this.raw = {
        epList,
        sort,
        uid
    };

    // 存储装备对象
    this._epList = epList;

    // 当前表格的分类
    this.sort = SORT[sort];

    // 当前表格的中文名称
    this.name = SortToName[this.sort];

    // 装备数量限制
    this.limit = EquipmentNumber[this.sort];

    // 当前表格的uid
    this.uid = uid;

    // 当前表格的具体模型，存储着具体的信息
    this.schema = extend({}, Schema[this.sort]);
    this._init();
}

let prototype = {

    // 更新某件装备的状态
    _updateEquipment() {

        // 更新表格
        return this.updateTable(this.uid, this.raw);
    },

    _init() {
        this._epList.forEach(ep => {

            // 更新模型，这里不会重复，因为在其他环节已经控制
            schema[ep.part] = ep;
        });
    },

    // 移除某件装备
    removeEquipment(uid) {
        let delEpIndex = this._epList.findIndex(ep => ep.uid === uid);

        // 删除对应装备
        let [delEp] = this._epList.splice(delEpIndex, 1);

        this.schema[delEp.part] = false;
        return this._updateEquipment();
    },

    // 添加某件装备
    addEquipment(ep) {

        // 当前部位已满，无法继续添加
        if (this.schema[ep.part]) return false;
        this._epList.push(ep);

        // 其余情况就将当前部位更新上去
        return this._updateEquipment();
    },

    removeTable() {
        delUid(this.uid);
        return this.delTable(this.uid);
    }
}

function create(proto) {
    Object.setPrototypeOf(prototype, proto);
    WishTable.prototype = prototype;
    prototype.constructor = WishTable;
}

// 使用从uid，从lc中拉取数据生成许愿表
function initWishTable(uid, tm) {

    // 从lc中获取表格配置并初始化信息
    return createWishTable(tm.getTable(uid), true);
}

export function initWishTables(tm) {

    // 使WishTable继承唯一的TableManager实例
    create(tm);

    // 返回所有许愿表的实例
    return tm.uidList.map(uid => {
        return initWishTable(uid, tm);
    });
}

// 返回一个创建许愿表的方法
export function createWishTable({
    epUids,
    sort,
    uid
}, init) {
    let tUid,
        epList = null;

    if (init) {
        tUid = uid;

        // 初始化时，根据配置还原对应装备对象
        epList = epUids.map(epOpt => restoreEquipment(epOpt));
    } else {
        tUid = genUid();

        // 添加时，创建新的装备对象
        epUids.map(epUid => createEquipment(epUid));
    }

    return new WishTable({
        epList,
        sort,
        tUid
    });
}