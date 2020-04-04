<template>
    <div class="mask"
         v-show="visible"
         :style="{ zIndex }"
         >
         <slot></slot>
    </div>
</template>

<script>
import { getZIndex, resetZIndex } from './util/index'

// 加载时的全局遮布
export default {
    name: 'MaskWrapper',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            zIndex: 0
        };
    },

    created () {
        this.zIndex = getZIndex();
    },

    beforeDestroy () {
        resetZIndex(this.zIndex);
    }
};
</script>

<style lang="stylus" scoped>
.mask
    position fixed
    display table
    top 0
    width 100%
    height 100%
    text-align center
    background-color rgba(0, 0, 0, 0.7)

    &:after
        content ''
        display inline-block
        height 100%
        vertical-align middle
</style>


