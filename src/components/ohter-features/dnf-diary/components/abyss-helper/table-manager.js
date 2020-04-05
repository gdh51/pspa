import { StorageHelper } from './storage-helper'
import { create } from './wish-table'

// 管理现有表格的id
const TableUidList = 'UidList';

// 全局的表格管理员只会有一个
class TableManager extends StorageHelper {
    constructor() {
        super(this);
        this.key = TableUidList;

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

    // 删除某个表格
    delTable(uid) {
        return this.remove(uid);;
    }

    clearAll () {

        // 这里不能直接使用storage的clear api因为要乱删其他的
        this.list.forEach(tableUid => this.delTable(tableUid));
        this.list = [];
    }
}

function initTableUidList(tableM, key) {
    initCommand(tableM, 'list', key, []);
}

// 封装为指令模式
function initCommand(tableM, targetKey, initKey, val) {
    if (tableM.has(initKey)) {
        return tableM[targetKey] = tableM.get(initKey);
    }

    // 如果没有任何表格，则自主创建一个
    tableM[targetKey] = tableM.set(initKey, val);
}

export function initTableManager() {

    // 全局仅操作一个管理员
    const Manager = new TableManager();
    create(Manager);
}
