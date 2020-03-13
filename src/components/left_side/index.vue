<template>
    <div class='left-side'>
        <!-- 是否显示切换按钮 -->
        <transition name='change-tab'>
            <div class='toggle-info'
                 v-show="isInArticle">
                <button
                    type='button'
                    @click="changeSide"
                >Toggle</button>
                <polo-hr />
            </div>
        </transition>
        <transition name='change-tab'
                    mode='out-in'
                    appear>
            <total-nav v-if="positiveSide"
                       key='side-info'
                       v-bind="$attrs"/>
            <article-nav v-else
                         key='article-info'/>
        </transition>
    </div>
</template>

<script>
import ArticleNav from './article-nav/index'
import TotalNav from './total-nav/index'
import { mapState } from 'vuex'

export default {
    name: 'leftSide',

    components: {
        ArticleNav,
        TotalNav
    },

    data () {
        return {

            // 该变量表示显示侧边栏哪一面，由组件控制
            positiveSide: true
        };
    },

    computed: {
        ...mapState('article/', ['isInArticle'])
    },

    watch: {
        isInArticle: {
            handler(val) {
                if (val) {
                    this.positiveSide = false;
                    return;
                }
                this.positiveSide = true;
            },
            immediate: true
        }
    },

    methods: {
        changeSide () {
            this.positiveSide = !this.positiveSide;
        }
    }
};
</script>

<style lang="stylus" scoped>
$orange = #ffb129

.change-tab-enter-active,
.change-tab-leave-active
    transition all 0.3s ease


.change-tab-enter,
.change-tab-leave-to
    transform rotateY(90deg)
    opacity 0


/* 侧栏布局 */
.left-side
    .toggle-info
        padding-right 0.5rem
        text-align center
        transition all 0.5s ease

        button
            background-color #70b991
            border none
            padding 0.5rem 0.6rem
            color $orange
            cursor pointer
            font-family 'orgin'
            transition all 1s ease

            &:hover
                background-color #00c4b6
                color #7affaf
                outline 0.2rem solid $orange
</style>

