<template functional>
    <i :class="[props.icon, data.staticClass, data.class, data.style]"
        class="icon"
       v-on="listeners"></i>
</template>

<style lang="stylus" scoped>
.icon
    font-family 'icomoon'
    font-style normal
    font-weight 600
    line-height 1

.phone-menu::after
    content '\ea7a'

.search:before
    content '\e986'

.github::after
    content '\eab0'


.weibo::after
    content '\ea9a'


.twitter::after
    content '\ea96'


.steam::after
    content '\eaad'


.qq::after
    content '\f1d6'

.viewicon::after
    content '\e9e3'

.top-arrow::before
    content '\ea3c'

.toggle-sidebar::before
    content '\ea3c'

.file::before
    content '\e930'

.links::before
    content '\e936'

</style>

<script>
export default {
    name: 'Icon',

    props: {
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>