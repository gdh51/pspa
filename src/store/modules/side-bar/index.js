export default {
    namespaced: true,
    state: {
        nodesTreeMap: [{
            text: '无标题',
            children: [],
            selected: true
        }],
        isShrink: false
    },
    mutations: {
        updateCatalog(state, map) {
            state.nodesTreeMap = map;
        },

        toggleShrink(state, val) {
            state.isShrink = (val !== void 0 && typeof val === 'boolean') ? val : !state.isShrink;
        }
    }
}