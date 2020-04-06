export class StorageHelper {
    constructor () {}

    get(key) {

        // 优先返回现有结果
        return StorageHelper.storage[key] || JSON.parse(localStorage.getItem(key));
    }

    has(key) {

        // 缓存，防止get重复查询
        StorageHelper.storage[key] = this.get(key);

        return StorageHelper.storage[key] !== null;
    }

    remove(key) {
        StorageHelper.storage[key] = null;
        return localStorage.removeItem(key);
    }

    set(key, val) {
        let pendingVal = JSON.stringify(val),
            result = false;

        // 缓存在storaget上
        StorageHelper.storage[key] = val;

        try {
            localStorage.setItem(key, pendingVal);
            result = true;
        } catch (e) {
            // 这里出错仅会在setItem时，所以不用关心result
        }

        return result;
    }

    clearAll() {
        return localStorage.clear();
    }
}

// 全局维护一个storage缓存
StorageHelper.storage = {};
