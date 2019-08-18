import Vue from 'vue';
import Vuex from 'vuex';
import sideBar from './modules/sideBar.js';
Vue.use(Vuex);

const store=new Vuex.Store({
  state: {
    isShowMenu: true,//显示上方菜单
    isShowSideBar:false,//显示右侧栏目
    isInArticle:false,//是否处于文章中
    isShowPagebar:false,//是否显示页码条
    totalPage:1,
    isLoading: false
  },
  mutations:{
    toggleMenu(state){
      state.isShowMenu=!state.isShowMenu;
    },
    togglePagebar(state){
      state.isShowPagebar = !state.isShowPagebar;
    },
    toggleSideBar(state){
      state.isShowSideBar=!state.isShowSideBar;
    },
    toggleArticle(state){
      state.isInArticle = !state.isInArticle;
    },
    initArticle(state){
      state.isShowSideBar = !state.isInArticle;
    },
    postPage(state,page){
      state.totalPage=page;
    },
    toggleLoading(state){
      state.isLoading=!state.isLoading;
    }
  },
  modules:{
    sideBar
  }
})


export default store;
