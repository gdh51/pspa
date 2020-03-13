import Vue from 'vue';
import Vuex from 'vuex';
import sideBar from './modules/side-bar/index';
import pageBar from './modules/page-bar/index';
import article from './modules/article/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showWrapper: false
    },
    mutations: {
        toggleWrapper: (function () {
            let count = 0;

            return (function (state, value) {

                if (value) {
                    count += 1;
                } else {
                    count -= 1;
                }

                // 当全部准备好时，关闭wrapper
                if (count <= 0) {
                    state.showWrapper = false;

                    // 防止小于0
                    count = 0;
                } else {
                    state.showWrapper = true;
                }
            })
        })()
    },
    modules: {
        sideBar,
        pageBar,
        article
    }
})

export default store;