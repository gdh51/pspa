export default {
    state: {
        isShowToggle: false,
        nodesTreeMap: [{
            text: '无标题',
            children: [],
            selected: true
        }]
    },
    mutations: {
        toggleBtn(state) {
            state.isShowToggle = !state.isShowToggle;
        },

        updateCatalog(state, map) {
            state.nodesTreeMap = map;
        }
    }
}