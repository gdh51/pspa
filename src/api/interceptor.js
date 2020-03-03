import axios from 'axios'

// 注册全局拦截器，在请求时遮蔽页面
function install (Vue, store) {
    Vue.prototype.$axios = axios;

    axios.interceptors.request.use(config => {
        store.commit('toggleWrapper', true);

        return config;
    }, error => {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(response => {
        store.commit('toggleWrapper', false);

        return response;
    }, error => {
        store.commit('toggleWrapper', false);

        return Promise.reject(error);
    });
}

export default {
    install
};