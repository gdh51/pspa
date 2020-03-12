<template>
    <nav class="nav-bar"
        :class="navScrollCls"
         ref='nav'>
        <span class='nav-left'>
            <router-link class='blog-name' to='/' >Lazybones</router-link>
        </span>
        <icon class="nav-right"
              icon="phone-menu"
             @click.stop='toggleMenu'/>
        <span class='nav-right pc-menu'
              ref='menu'>
            <a class='nav-page'>
                <icon icon="search"/>
                <span> Search</span>
            </a>
            <router-link
                to="/about?currentPage=1"
                class='nav-page'
            >About</router-link>
            <router-link
                to="/archives?currentPage=1"
                class='nav-page'
            >Archives</router-link>
            <router-link
                to="/tags"
                class='nav-page'
            >Tags</router-link>
            <router-link
                to="/categories?currentPage=1"
                class='nav-page'
            >Catagories</router-link>
        </span>
    </nav>
</template>

<style lang="stylus" scoped>
.nav-bar
    position absolute
    z-index 2111
    top 0
    padding 10px 36px
    width 100%
    font-size 18px
    transition top .3s linear

    .nav-left
        float left

        .blog-name
            font-weight 700
            text-shadow 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15)
            color #fcce77


    >>>.nav-right
        float right


    >>>.phone-menu
        display none
        padding-top 0.5rem
        color #fcce77


    .pc-menu
        .nav-page
            position relative
            margin-left 0.6rem
            padding-bottom 0.3rem
            text-shadow 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3)
            color #ffb129
            font-size 0.7rem
            cursor pointer

            &:hover
                color #fede4b

                &::after
                    width 100%

            &::after
                position absolute
                bottom 0
                left 0
                z-index 1
                width 0
                height 3px
                background-color #ffb129
                content ''
                transition all 0.3s linear

        &.slide-down
            transform translateY(0)
            opacity 1

.nav-sticky
    position fixed
    padding-right calc(325px + .5rem)
    background-color rgba(255,255,255,0.3)
    box-shadow 0 5px 6px -5px rgba(133,133,133,.6)

.nav-scroll-up
    top -60px

@media screen and (max-width: 768px)
    .nav-bar
        >>>.phone-menu
            display block

        .pc-menu
            position absolute
            display none
            top 3rem
            right 0.8rem
            width 6rem
            background rgba(255, 255, 255, 0.9)
            -webkit-box-shadow 0 0 4px rgba(0, 0, 0, 0.27)
            transform translateY(-20px)
            box-shadow 0 0 4px rgba(0, 0, 0, 0.27)
            transition all 0.3s ease-in-out
            opacity 0

            .nav-page
                display block
                margin-left 0
                padding-top 0.3rem
                padding-bottom 0.3rem
                color #ffb129
                text-shadow none
                font-size 0.8rem
</style>

<script>
import { on, off, trigger } from '../../../../shared/index'
import { toggleFade } from './util'

const SmallScreenSize = 768;

export default {
    name: 'TopNav',
    data () {
        return {
            isBigScreen: true,
            isShrink: false,
            isSticky: false,
            isScrollDown: true,
            toggleFade: null
        }
    },

    mounted() {
        let cb = this.initStickyNavCb();
        let el = this.$refs.menu;

        this.toggleFade = toggleFade(el, 'slide-down', 0.3);

        on('scroll', window, cb);
        on('resize', window, this.resizeEventHandler);

        // 触发一次，来初始化
        trigger(window, 'resize');

        this.$on('hook:destroyed', () => {
            off('scroll', window, cb);
            off('resize', window, this.resizeEventHandler)
        });
    },

    computed: {
        navScrollCls () {
            return {
                'nav-scroll-up': this.isScrollDown,
                'nav-sticky': this.isSticky
            };
        }
    },

    methods: {
        toggleMenu: function() {

            // 大屏时不执行
            if (this.isBigScreen) {
                return;
            }

            // 点击展开/收回列表
            this.toggleFade(this.isShrink = !this.isShrink);
        },

        initStickyNavCb() {
            const vm = this;
            const nav = this.$refs.nav;
            let lastY = window.scrollY;

            return function () {
                let curY = window.scrollY;

                if (curY - lastY >= 0) {
                    vm.isScrollDown = true;
                } else {
                    vm.isScrollDown = false;
                }

                lastY = curY;

                if (!vm.isSticky) {
                    vm.isSticky = true;
                }

                if (window.scrollY === 0) {
                    vm.isSticky = false;
                }
            };
        },

        resizeEventHandler () {
            let viewWidth = window.innerWidth;

            if (viewWidth > SmallScreenSize) {
                this.isBigScreen = true;

                // 大屏下要显示nav
                this.toggleFade(true);
            } else {
                this.isBigScreen = false;
                this.toggleFade(false, true);
            }
        }
    }
}
</script>