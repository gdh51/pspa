export class StorageHelper {
    constructor () {}

    get(key) {

        // 优先返回现有结果
        return StorageHelper.storage[key] || localStorage.getItem(key);
    }

    has(key) {

        // 缓存，防止get重复查询
        StorageHelper.storage[key] = localStorage.getItem(key);
        return typeof StorageHelper.storage !== null;
    }

    remove(key) {
        StorageHelper.storage[key] = null;
        return localStorage.removeItem(key);
    }

    set(key, val) {
        let pendingVal = JSON.stringify(val);
        StorageHelper.storage[key] = pendingVal;
        return localStorage.setItem(key, pendingVal);
    }

    clearAll() {
        return localStorage.clear();
    }
}

// 全局维护一个storage缓存
StorageHelper.storage = {};
