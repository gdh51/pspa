<template>
    <div class="home_container">
       <aside class="main_aside"
            :class="shrinkClass">
            <slot name="aside"/>
        </aside>
        <div class="main_view"
            :class="shrinkClass">
            <slot name="view"/>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.home_container
    position relative
    overflow hidden

    .main_aside
        position fixed
        z-index 182
        left 0
        width 300px
        height 100%
        padding 1rem 0 2rem 0.5rem
        transition all .3s linear
        box-shadow -0.25rem 0 0.25rem rgb(223, 207, 175) inset
        background-color #eee7da

        @media screen and (max-width: 768px)
            left -300px

    & .shrink
        left -300px

    .main_view
        width 100%
        padding-left 300px
        transition all .3s linear

        @media screen and (max-width: 768px)
            padding-left 0

    & .shrink
        padding-left 0
</style>

<script>
export default {
    name: 'MainLayout',
    props: {
        shrink: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        shrinkClass () {
            return this.shrink ? 'shrink' : '';
        }
    }
}
</script>