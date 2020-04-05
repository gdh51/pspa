// 这个类的初始化必须要等到TableManager实例化之后
function WishTable ({
    limit = 3,
    epList = [],
    sort = '左侧装备'
}) {
    this.limit = limit;
    this.epList = epList;
    this.sort = sort;
    this.uid = uid;
}

let prototype = {
    // 更新表格上某个字段
    updateTableField(key, val) {

        // 获取表格，没有则创建一个新的
        let table = this.getTable(this.uid) || {};
        if (val === void 0) {
            delete table[key];
        } else {
            table[key] = val;
        }

        // 更新表格
        return this.updateTable(this.uid, table);
    },

    removeTableField (key) {
        return this.updateTableField(key);
    },

    addTableField (key, val) {
        return this.updateTableField(key, val);
    }
}

export function create(proto) {
    Object.setPrototypeOf(prototype, proto);
    WishTable.prototype = prototype;
    prototype.constructor = WishTable;
}
