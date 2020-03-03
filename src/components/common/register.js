import PoloHr from './separator/polo_hr.vue';
import LoadingMask from './mask/mask.vue';

const Components = [PoloHr, LoadingMask];

// 注册全局组件
export default Vue => {
    Components.forEach(component => {
        Vue.component(component.name, component);
    });
};
