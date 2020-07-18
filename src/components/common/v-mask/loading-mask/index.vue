<template>
    <v-mask :visible="visible">
        <div class="loading">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </v-mask>
</template>

<script>

// 加载时的全局遮布
export default {
    name: 'LoadingMask',

    props: {
        visible: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="stylus" scoped>
@keyframes stretchdelay
    0%,
    40%,
    100%
        transform scaleY(0.4)
    20%
        transform scaleY(1)

.loading
    height 100%
    display table-cell
    vertical-align middle
    background-color rgba(0, 0, 0, 0.7)

    div
        background-color #67cf22
        height 60px
        width 6px
        margin 0 2px
        display inline-block
        animation stretchdelay 1.2s infinite ease-in-out


    .rect2
        -webkit-animation-delay -1.1s
        animation-delay -1.1s


    .rect3
        -webkit-animation-delay -1s
        animation-delay -1s


    .rect4
        -webkit-animation-delay -0.9s
        animation-delay -0.9s


    .rect5
        -webkit-animation-delay -0.8s
        animation-delay -0.8s
</style>


