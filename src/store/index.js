import Vue from 'vue';
import Vuex from 'vuex';
import sideBar from './modules/sideBar.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isShowMenu: true, //显示上方菜单
        isShowSideBar: false, //显示右侧栏目
        isInArticle: false, //是否处于文章中
        isShowPagebar: false, //是否显示页码条
        totalPage: 1,
        showWrapper: false
    },
    mutations: {
        toggleMenu(state) {
            state.isShowMenu = !state.isShowMenu;
        },
        togglePagebar(state) {
            state.isShowPagebar = !state.isShowPagebar;
        },
        toggleSideBar(state) {
            state.isShowSideBar = !state.isShowSideBar;
        },
        toggleArticle(state) {
            state.isInArticle = !state.isInArticle;
        },
        initArticle(state) {
            state.isShowSideBar = !state.isInArticle;
        },
        postPage(state, page) {
            state.totalPage = page;
        },
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
        sideBar
    }
})


export default store;