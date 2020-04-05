<template>
    <span class="myth" @click="$emit('click-event')">
        <slot>神话装备展示</slot>
    </span>
</template>

<style lang="stylus" scoped>
 .myth
    background linear-gradient(#f9c835, #cc65e9)
    -webkit-background-clip text
    -moz-background-clip text
    -ms-background-clip text
    -o-background-clip text
    color transparent
</style>

<script>
export default {
    name: 'MythColor',

    props: {
        tag: {
            type: String,
            default: 'span'
        }
    },

    render (c) {
        return h(this.tag, this.$slots.default);
    }
}
</script>