<template>
    <div id="app">
        <back-canvas></back-canvas>
        <i
            :style="{ transform: 'rotateZ(' + degree + ')' }"
            @click="turnArrow"
            class="toggle-sidebar icon"
        ></i>
        <header-nav></header-nav>
        <transition
            name="side-show"
            appear
        >
            <left-side
                v-show="this.$store.state.isShowSideBar"
                :show="this.$store.state.isInArticle"
                v-bind="sideData"
            ></left-side>
        </transition>
        <!-- 容器 -->
        <container></container>
        <!-- 容器 -->
        <footer-con :view="visited"></footer-con>
        <loading-mask></loading-mask>
    </div>
</template>

<script>
import leftSide from './components/left_side/index.vue';
import headerNav from './components/header_nav.vue';
import footerCon from './components/footer_con.vue';
import backCanvas from './components/back_canvas.vue';
import container from './components/container.vue';

export default {
    name: 'app',

    components: {
        leftSide,
        headerNav,
        footerCon,
        backCanvas,
        container
    },
    data() {
        return {
            bodyEl: document.body,
            visited: 0,
            sideData: {
                tags: 0,
                articles: 0,
                categories: 0
            }
        };
    },

    computed: {
        degree: function() {
            return this.$store.state.isShowSideBar ? '180deg' : '0deg';
        },
        sideShow: function() {
            return this.$store.state.isShowSideBar;
        }
    },

    watch: {
        sideShow(newValue) {
            this.bodyEl.style.paddingLeft = newValue ? '300px' : '0px';
        }
    },

    methods: {
        turnArrow: function() {
            this.$store.commit('toggleSideBar');
        }
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

@color: #ffb129;

#app {
    .icon {
        font-family: 'icomoon';
        font-style: normal;
        font-weight: 600;
        line-height: 1;
    }

    .toggle-sidebar {
        position: fixed;
        z-index: 3333;
        bottom: 20px;
        left: 16px;
        font-size: 16px;
        cursor: pointer;
        color: @color;
        transition: all 0.5s linear;
    }

    .toggle-sidebar::before {
        content: '\ea3c';
    }

    @media screen and (max-width: 768px) {
        .toggle-sidebar {
            display: none;
            position: fixed;
            bottom: 20px;
            left: 16px;
            z-index: 100;
            font-size: 16px;
            cursor: pointer;
            color: @color;
            transition: all 0.5s linear;
        }
    }
    @media screen and (max-width: 1024px) {
        .toggle-sidebar {
            display: none;
        }
    }
}

.side-show-enter-active,
.side-show-leave-active {
    transition: all 0.5s linear;
}

.side-show-enter,
.side-show-leave-to {
    transform: translateX(0) !important;
    opacity: 0;
}
</style>
