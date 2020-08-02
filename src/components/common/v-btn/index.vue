<template>
    <button class="v-btn" 
           :disabled="$attrs.disabled"
           @click="$emit('btn-click')">
        {{ text }}
    </button>
</template>

<style lang="stylus" scoped>
.v-btn
    display inline-block
    padding 0 0.6rem
    height 1.6rem
    background #fcce77
    color rgb(144, 184, 167)
    text-align center
    line-height 1.6rem
    font-family origin
    border none
    border-radius 5px
    cursor pointer
    outline none
    transition all 0.3s ease

    &:hover
        background-color #4ccb70
        color #fcce77

        &:disabled
            color purple

    &:disabled
        background-color #f8
        cursor not-allowed
</style>

<script>
export default {
    name: 'VBtn',

    props: {
        text: {
            type: String,
            default: '无'
        }
    },

    data () {
        return {};
    }
};
</script>
