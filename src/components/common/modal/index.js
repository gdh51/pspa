import DialogComponent from './index.vue'
import Vue from 'vue'

class Dialog {
    constructor(options = {}) {
        this.rawOptions = options;

        // 当不具有标题时，隐藏标题栏
        this.height = options.height || 'auto';
        this.width = options.width || 'auto';
        this.props = options.props || {};
        this.props.title = options.title;
        this._init(options.component);
    }

    _init(component) {
        this.mounted_el = document.createElement('div');

        // Dialog组件
        const DialogConstructor = Vue.extend(DialogComponent);

        document.body.appendChild(this.mounted_el);

        // 初始化modal组件
        this._instance = new DialogConstructor({
            propsData: this.props
        }).$mount(this.mounted_el);

        initEventCallback(this.rawOptions, this._instance, this);

        this._instance.dialog = this;

        // vm模版挂载后会替换原元素，所以真实挂载在dom的元素为$el
        this.mounted_el = this._instance.$el;

        if (component) {
            this._instance.$slots.default = [this._instance.$createElement(component)];
        }
    }

    $show() {
        this._instance.visible = true;
    }

    $hide() {
        this._instance.visible = false;
    }

    $destory() {
        let instance = this._instance;
        instance.visible = false;
        instance.dialog = null;
        instance.$nextTick(() => {
            instance.$destroy();
        });

        this.mounted_el.remove();
    }
}

function initEventCallback(opt, ctx, dialog) {

    // 默认情况下，关闭窗口会销毁弹框，如果传入hide事件，则交给用户自定义行为。
    ctx.$on('hide-table', opt.hideEvent || (() => dialog.$destory()));
}

export function $modal(opt) {
    let dialog = new Dialog(opt);
    dialog.$show();

    return dialog;
}
