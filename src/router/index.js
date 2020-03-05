import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes'

Vue.use(VueRouter);

export function initRouter (vm, router) {
    // router.beforeEach((to, from, next) => {
    //     vm.$store.commit('toggleWrapper', true);
    //     next();
    // });
}

export const router = new VueRouter({
    mode: 'history',
    routes
});
