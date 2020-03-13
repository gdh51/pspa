<template>
    <div class="content-container">
        <transition name="slide"
                    mode="out-in">
            <router-view></router-view>
        </transition>
        <page-bar v-show="isShowPagebar"/>
    </div>
</template>

<style lang="stylus">
.slide-enter-active,
.slide-leave-active
    transition all 0.3s ease

.slide-enter,
.slide-leave-to
    opacity 0
    transform translateX(10px)


.content-container
    margin: 0 3rem

    p
        display block
        color #eee7da
        margin-block-start 1em
        margin-block-end 1em
        margin-inline-start 0px
        margin-inline-end 0px


    ul
        margin-top 0.4rem
        padding 0 0 0 .8rem
        list-style none
        counter-reset li

        li
            position relative
            color aliceblue
            margin .2rem 0
            padding .1rem .5rem .1rem 1.5rem

            &::before
                position absolute
                left 0
                top 10px
                margin-left 0.45rem
                width .3rem
                height .3rem
                border .15rem solid #53787d
                border-radius: .3rem
                background #fff
                content ''
                line-height .3rem
                cursor pointer
                transition all .3s ease

            &:hover::before
                border .15rem solid #fcce77

        ul
            padding-left .5rem

@media screen and (max-width: 768px)
    .content-container
        margin 0 30px

.archives-sort-title
    position relative
    color #70b991
    padding-bottom 1.2rem
    padding-left 1rem
    font-size 1.2rem
    line-height 1

    &::before
        position absolute
        top 0.1rem
        left calc(-0.5rem + 1px)
        z-index 1
        width 0.5rem
        height 0.5rem
        border 0.25rem solid #70a8af
        border-radius 0.5rem
        background-color #fff
        content ''
        line-height 0.5rem
        transition all 0.2s ease-in-out


    &:hover::before
        border .25rem solid #fcce77
        cursor pointer


    &::after
        position absolute
        bottom 0
        left 0
        z-index 0
        width 0.1rem
        height 1.3rem
        background #53787d
        content ''



.archives-sort
    padding-left 1rem
    border-left 2px solid #53787d

    .archives-sort-items
        position relative
        margin-bottom 1rem
        transition all 0.2s ease-in-out

        &::before
            position: absolute
            top .5rem
            left calc(-1rem - 7px)
            width .3rem
            height .3rem
            border .15rem solid #70a8af
            border-radius .3rem
            background #fff
            content ''
            line-height .3rem
            transition all .2s ease-in-out


        &:hover::before
            cursor pointer
            border-color #fcce77


        &.year
            color #70b991
            font-size 0.8rem

            &:hover::before
                border-color #70a8af


            &::before
                top 0.5rem
                border-color #fcce77




    .archives-sort-item_time
        position absolute
        top 0.1rem
        color #99a9bf


    .archives-sort-item_title
        display block
        margin-left 5rem
        color aquamarine
        text-decoration none
        font-size .8rem
        cursor pointer
        transition all 0.3s ease

        &:hover
            color #ffb129



</style>

<script>
import pageBar from './components/page_bar'
import { mapState } from 'vuex'


export default {
    name: 'ContentContainer',
    components: {
        pageBar
    },

    computed: {
        ...mapState('pageBar/', ['isShowPagebar'])
    }
};
</script>