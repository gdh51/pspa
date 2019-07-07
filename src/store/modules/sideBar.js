export default {
  state:{
    isShowToggle:false,
  },
  mutations:{
    toggleBtn(state){
      state.isShowToggle=!state.isShowToggle;
    }
  }
}