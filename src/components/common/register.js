import PoloHr from './separator/polo_hr.vue';
import LoadingMask from './mask/loading-mask/index.vue';
import Icon from './icon/index.vue'
import VBtn from './v-btn/index.vue'
import { $modal } from './modal/index.js'

const Components = [PoloHr, LoadingMask, Icon, VBtn];

// 注册全局组件
export default Vue => {
    Components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$modal = $modal;
};
