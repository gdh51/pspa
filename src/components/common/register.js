import PoloHr from './separator/polo_hr.vue';
import LoadingMask from './v-mask/loading-mask/index.vue';
import VMask from './v-mask/index.vue'
import VIcon from './v-icon/index.vue';
import VBtn from './v-btn/index.vue';
import VInput from './v-input/index.vue';
import { $modal } from './modal/index.js';

const Components = [PoloHr, LoadingMask, VMask, VIcon, VBtn, VInput];

// 注册全局组件
export default Vue => {
    Components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$modal = $modal;
};
