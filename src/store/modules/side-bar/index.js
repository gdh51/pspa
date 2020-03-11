export default {
    namespaced: true,
    state: {
        isInArticle: false,
        nodesTreeMap: [{
            text: '无标题',
            children: [],
            selected: true
        }],
        isShrink: false
    },
    mutations: {
        toggleBtn(state, val) {
            state.isInArticle = (val !== void 0 && typeof val === 'boolean') ? val : !state.isInArticle;
        },

        updateCatalog(state, map) {
            state.nodesTreeMap = map;
        },

        toggleShrink(state, val) {
            state.isShrink = (val !== void 0 && typeof val === 'boolean') ? val : !state.isShrink;
        }
    }
}