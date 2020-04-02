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
Vue.config.productionTip = true;
Vue.config.devtools = true;

const vm = new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');

initRouter(vm, router);
