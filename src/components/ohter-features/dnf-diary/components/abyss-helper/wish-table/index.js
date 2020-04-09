import {
    SORT,
    SortToName,
    EquipmentNumber,
    Schema
}
from './constants'
import {
    extend,
    deepClone
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

// 输出一种模型方案
export function outputSchema(name) {
    return name ? extend({}, Schema[name]) : deepClone(Schema);
}

export function hasSchemaPart(ep, schema, inner) {
    let partKey = ep.myth ? 'myth' : ep.part,
        sort = typeof ep.sort === 'number' ? SORT[ep.sort] : sort;
    return inner ? !!schema[partKey] : !!schema[sort][partKey];
}

export function updateSchemaPart(ep, schema, inner, del) {
    let partKey = ep.myth ? 'myth' : ep.part,
        sort = typeof ep.sort === 'number' ? SORT[ep.sort] : sort;

    if (inner) {
        return schema[partKey] = del ? false : ep;
    }

    schema[sort][partKey] = del ? false : ep;
}

// 这个类的初始化必须要等到TableManager实例化之后
function WishTable({
    tableSchema = {},
    sort = SORT[3],
    uid
}, init) {

    // 原始数据作为存储在lc中的数据
    this.raw = {
        tableSchema,
        sort,
        uid
    };

    // 当前表格的分类
    this.sort = typeof sort === 'number' ? SORT[sort] : sort;

    // 当前表格的中文名称
    this.name = SortToName[this.sort];

    // 装备数量限制
    this.limit = EquipmentNumber[this.sort];

    // 当前表格的uid
    this.uid = uid;

    // 当前表格的具体模型，存储着具体的信息
    this.schema = deepClone(tableSchema);
    this._init(init);
}

let prototype = {
    _init(init) {
        let schema = this.schema;

        // 在对应装备部位注册对应的装备
        let ep;
        for (let part in schema) {
            ep = schema[part];

            if (ep) {

                // 初始化时还原为原始的装备对象
                if (init) {
                    schema[part] = restoreEquipment(ep);

                // 添加时生成新的装备对象
                } else {
                    schema[part] = createEquipment(ep.uid);

                    // 初始化选中状态
                    this.raw.tableSchema[part].selected = false;
                }
            }
        }

        // 添加表格时
        if (!init) {

            // 将表格上传到管理员队列中
            this.addTable(this.uid);
            this.updateTable(this.uid, this.raw);
        }
    },

    // 更新某件装备的状态
    updateEquipment(ep, add, delKey) {

        this._updateRaw(ep, add, delKey);

        // 更新表格
        return this.updateTable(this.uid, this.raw);
    },

    _updateRaw(ep, add, delKey) {

        // 先看是不是神话
        let partKey = ep.myth ? 'myth' : ep.part;

        // 移除原始配置中相对部位的装备
        if (delKey) {
            return this.raw.tableSchema[delKey] = false;
        }

        // 为原始配置中添加新增的装备配置
        if (add) {
            return this.raw.tableSchema[partKey] = ep;
        }

        // 单纯的更新选中情况
        this.raw.tableSchema[partKey].selected = ep.selected;
    },

    // 移除某件装备
    removeEquipment(ep) {

        // 先看是不是神话
        let partKey = ep.myth ? 'myth' : ep.part;

        // 移除表格中对应模块即可
        this.schema[partKey] = false;

        // 更新原始配置文件
        return this.updateEquipment(null, false, partKey);
    },

    // 添加某件装备
    addEquipment(ep, cover) {

        // 先看是不是神话
        let partKey = ep.myth ? 'myth' : ep.part;

        // 当前部位已满，无法继续添加
        if (!cover && this.schema[partKey]) return false;

        // 更新当前视图中的装备数据
        this.schema[partKey] = createEquipment(ep.uid);

        // 更新原始配置及其lc中的原始配置
        return this.updateEquipment(ep, true);
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

// 初始打开app时的初始化逻辑，拉取wt
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
    tableSchema,
    sort,
    uid
}, init) {
    if (!init){

        // 添加表格时，只需要为其生成id即可
        uid = genUid();
    }

    return new WishTable({
        tableSchema,
        sort,
        uid
    }, init);
}
