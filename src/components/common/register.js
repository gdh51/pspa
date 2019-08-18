import poloHr from './separator/polo_hr.vue';
import loadingMask from './mask/mask.vue';

// 注册全局组件
export default (Vue) => {
  Vue.component(poloHr.name, poloHr);
  Vue.component(loadingMask.name, loadingMask);
}