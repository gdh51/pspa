import Vue from 'vue';
import App from './App.vue';
import { router, initRouter } from './router/index.js';
import store from './store/index.js';
import axios from './api/interceptor';
import Common from './components/common/register.js';
import LMarkdown from '../node_modules/l-markdown/lib/l-markdown.components';

// 注册全局组件
Vue.use(Common);
Vue.use(LMarkdown);

// 注册请求拦截器
Vue.use(axios, store);
Vue.config.productionTip = false;
Vue.config.devtools = false;

const vm = new Vue({
    render: h => h(App),
    router,
    store,
    methods: {
        checkWindowSize() {
            var timer = 0,
                headerNavVue = this.$children[0].$children[1];
            return function() {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    var windowWidth = window.innerWidth;
                    var menu = headerNavVue.$refs.menu;
                    menu.style.opacity = 1;
                    if (windowWidth < '1024') {
                        document.body.style.paddingLeft = 0;
                    }
                    if (windowWidth > '768') {
                        headerNavVue.isShowMenu = true;
                        menu.style.display = 'block';
                        if (!menu.classList.contains('slide-down')) {
                            menu.classList.add('slide-down');
                        }
                    } else {
                        menu.style.display = headerNavVue.isShowMenu == true;
                    }
                }, 1000);
            };
        }
    }
}).$mount('#app');

initRouter(vm, router);

window.addEventListener('resize', vm.checkWindowSize(), false);
