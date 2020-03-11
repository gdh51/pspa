<template>
    <div class='left-side'>
        <!-- 是否显示切换按钮 -->
        <transition name='change-tab'>
            <div class='toggle-info'
                 v-show="isInArticle">
                <button
                    type='button'
                    v-on:click='true'
                >切换侧边栏</button>
                <polo-hr />
            </div>
        </transition>
        <transition name='change-tab'
                    mode='out-in'
                    appear>
            <total-nav v-if="!isInArticle"
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

    computed: {
        ...mapState('sideBar/', ['isInArticle'])
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

