import {
    StorageHelper
} from './storage-helper'
import {
    initWishTables,
    createWishTable
}
from './wish-table/index'
import { initUidState } from './wish-table/uid'

// 管理现有表格的id
const TableUidList = 'UidList';

// 全局的表格管理员只会有一个
class TableManager extends StorageHelper {
    constructor() {
        super();
        this.key = TableUidList;
        this.list = null;

        // 初始化表格管理员
        this._init(TableUidList);
    }

    _init(listId) {
        initTableUidList(this, listId);
    }

    // 获取具体的某个表格(这里是确保了表格存在的情况下)
    getTable(uid) {
        return this.get(uid);
    }

    updateTable(uid, val) {
        return this.set(uid, val);
    }

    addTable(epUids, sort) {

        // 创建新的许愿表
        let wt = createWishTable(epUids, sort);

        // 将表格信息更新到lc上
        this.updateTable(wt.uid, wt);
    }

    // 删除某个表格
    delTable(uid) {
        return this.remove(uid);
    }

    clearAll() {

        // 这里不能直接使用storage的clear api因为要乱删其他的
        this.uidList.forEach(tableUid => this.delTable(tableUid));
        this.uidList = [];
    }
}

// 获取所有表格，使它们的uid组成一个数组
function initTableUidList(tm, key) {
    initCommand(tm, 'uidList', key, []);
}

// 封装为指令模式
function initCommand(tm, targetKey, initKey, val) {

    if (tm.has(initKey)) {
        return tm[targetKey] = tm.get(initKey);
    }

    tm.set(initKey, val);

    // 如果没有任何表格，则自主创建一个
    tm[targetKey] = tm.get(initKey);
}

export function initTableManager() {

    // 全局仅操作一个管理员，初始化管理员，拉取现有表格的uid
    const Manager = new TableManager();

    initUidState(Manager.uidList[Manager.uidList.length - 1]);

    // 初始化wt，从lc中拉取数据，获取要渲染的表格
    Manager.list = initWishTables(Manager);

    return Manager;
}