<template>
    <nav class='nav-bar'
         ref='nav'>
        <span class='nav-left'>
            <router-link
                class='blog-name' to='/'
            >Lazybones</router-link>
        </span>
        <icon class="nav-right"
              icon="phone-menu"
             @click.stop='judgeShowMenu'/>
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
    transition all 0.2s ease-in-out

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
import { on, off } from '../../../../shared/index'
export default {
    name: 'TopNav',
    data () {
        return {
            isShowMenu: false,
            isSticky: false,
            scrollDirection: 'down',
        }
    },

    mounted() {
        let cb = this.initStickyNavCb();

        on('scroll', window, cb);
        this.$on('hook:destroyed', () => {
            off('scroll', window, cb);
        });
    },

    methods: {
        judgeShowMenu: function(e) {
            var el = this.$refs.menu;
            if (window.innerWidth > '768') {
                //不为小窗口时不执行
                this.isShowMenu = true;
                el.style.display = 'block';
                return;
            }
            if (e.currentTarget.tagName == 'I') {
                this.isShowMenu = !this.isShowMenu;
            } else {
                this.isShowMenu = false;
            }

            if (this.isShowMenu == true) {
                //display:none特殊情况
                //添加类要实现动画，必须添加setTime
                el.style.display = 'block';
                setTimeout(() => {
                    el.style.opacity = 1;
                    el.classList.toggle('slide-down');
                }, 0);
            } else {
                //去掉类时要先留过渡时间执行完动画
                el.classList.toggle('slide-down');
                el.style.opacity = this.isShowMenu ? 1 : 0;
                setTimeout(() => {
                    el.style.display = 'none';
                }, 300);
            }
        },

        initStickyNavCb() {
            const vm = this;
            const nav = this.$refs.nav;
            return function () {
                //判断滑动方向
                // that.scrollDirection = (beginY - window.pageYOffset < 0) ? 'down' : 'up';
                // beginY=window.pageYOffset;
                //取消查询

                if (!vm.isSticky) {
                    vm.isSticky = true;
                    nav.style.position = 'fixed';
                    nav.style.backgroundColor = 'rgba(255,255,255,0.3)';
                    nav.style.boxShadow = '0 5px 6px -5px rgba(133,133,133,.6)';
                }
                if (window.scrollY == 0) {
                    vm.isSticky = false;
                    nav.style.position = 'absolute';
                    nav.style.backgroundColor = '';
                    nav.style.boxShadow = '';
                }
            };
        }
    }
}
</script>