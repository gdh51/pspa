export default {
    namespaced: true,
    state: {
        isShowPagebar: false, //是否显示页码条
        totalPage: 1,
    },
    mutations: {
        togglePagebar(state) {
            state.isShowPagebar = !state.isShowPagebar;
        },
        postPage(state, page = 1) {
            state.totalPage = page;
        },

        updateTotalPage (state, page = 1) {

        }
    }
}