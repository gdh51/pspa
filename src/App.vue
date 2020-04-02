<template>
    <div id="app">
        <back-canvas></back-canvas>
        <main-layout :shrink="isShrink">
            <!-- 左边侧边栏 -->
            <template v-slot:aside>
                <left-side v-bind="sideData"/>
            </template>

            <!-- 右边的视图 -->
            <template v-slot:view>
                <viewport :view="visited"/>
            </template>
        </main-layout>
        <loading-mask :visible="showWrapper"/>
    </div>
</template>

<script>
import MainLayout from './layout/index'
import leftSide from './components/left_side/index.vue'
import Viewport from './components/index'
import backCanvas from './components/back_canvas.vue';
import { mapState } from 'vuex'

export default {
    name: 'app',

    components: {
        leftSide,
        backCanvas,
        MainLayout,
        Viewport
    },
    data() {
        return {
            visited: 0,
            sideData: {
                tags: 0,
                articles: 0,
                categories: 0
            }
        };
    },

    computed: {
        ...mapState('sideBar/', ['isShrink']),
        ...mapState(['showWrapper'])
    },

    created() {
        this.$axios.put('./visitors').then(data => {
            this.sideData = data;
            this.visited = data.visited;
        });
    }
};
</script>

<style lang="less">
@import url('./assets/global_css/global_css.css');
</style>
