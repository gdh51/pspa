let zIndexList = [6666],

    // 起始zIndex
    zIndex = zIndexList[zIndexList.length - 1];

export function getZIndex() {
    zIndexList.push(zIndex + 1);
    return zIndexList[zIndexList.length - 1];
}

export function resetZIndex(key) {
    zIndexList.splice(zIndexList.lastIndexOf(key) ,1);
    zIndex = zIndexList[zIndexList.length - 1];
}