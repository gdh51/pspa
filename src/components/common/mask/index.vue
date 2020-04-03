<template>
    <div class="mask"
         v-show="visible">
         <slot></slot>
    </div>
</template>

<script>
// 加载时的全局遮布
export default {
    name: 'MaskWrapper',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="stylus" scoped>
.mask
    position fixed
    z-index 9999
    display table
    top 0
    width 100%
    height 100%
    text-align center
    background-color rgba(0, 0, 0, 0.7)
</style>


