import PoloHr from './separator/polo_hr.vue';
import LoadingMask from './mask/loading-mask/index.vue';
import Icon from './icon/index.vue'

const Components = [PoloHr, LoadingMask, Icon];

// 注册全局组件
export default Vue => {
    Components.forEach(component => {
        Vue.component(component.name, component);
    });
};
