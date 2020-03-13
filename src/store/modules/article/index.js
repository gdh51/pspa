export default {
    namespaced: true,
    state: {
        isInArticle: false, //是否处于文章中
    },
    mutations: {
        toggleArticle(state, val = false) {
            state.isInArticle = val;
        }
    }
};
