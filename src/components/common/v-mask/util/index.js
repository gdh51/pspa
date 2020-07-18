let zIndexList = [6666],

    // 当前的该生成的zIndex起始值
    zIndex = zIndexList[zIndexList.length - 1];

export function getZIndex() {
    zIndex += 1;
    zIndexList.push(zIndex);
    return zIndex;
}

export function resetZIndex(key) {
    zIndexList.splice(zIndexList.lastIndexOf(key) ,1);
    zIndex = zIndexList[zIndexList.length - 1];
}