export default {
  state:{
    isShowToggle: false,
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],

  },
  mutations: {
    toggleBtn(state){
      state.isShowToggle=!state.isShowToggle;
    },
    collectHtag(state, ele){
      state[ele.tagName.toLowerCase()].push(ele);
    }
  }
}