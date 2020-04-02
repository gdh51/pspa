import DialogComponent from './index.vue'
import MaskWrapper from '../mask/index.vue'
import { extend } from 'vue'

class Dialog {
    constructor(options = {}) {
        this.rawOptions = options;
        this.component = options.component;

        // 当不具有标题时，隐藏标题栏
        this.title = options.title || false;
        this.height = options.height || 'auto';
        this.width = options.width || 'auto';
        this.props = options.props || {};
        this._init();
    }

    _init() {
        this.mounted_el = document.createElement('div');
        this.mounted_el.cssText = `position: fixed;display: `;
        const ModalCon = extend(DialogComponent);

        document.body.appendChild(this.mounted_el);

        // 初始化modal组件
        this._instance = new ModalCon({
            propsData: {
                title: this.title
            }
        }).$mount(this.mounted_el);

        if (this.component) {
            this._instance.$slots.default = [this._instance.$createElement(this.component, this.props)]
        }
    }

    $show() {

    }

    $hide() {

    }

    $destory() {

    }
}