<template>
    <header class="header">
        <header-content/>
        <top-nav/>
    </header>
</template>

<script>
import HeaderContent from './components/header-content'
import TopNav from './components/top-nav'

export default {
    name: 'HeaderContainer',
    components: {
        HeaderContent,
        TopNav
    }
};
</script>

<style lang="stylus" scoped>
.header
    position relative
    display inline-block
    width 100%
    height 100vh
    margin-bottom 1rem
    text-align center
    background-image url('../../../assets/img/bcimg.jpg')
    background-attachment fixed
    background-position center
    background-size cover
    background-color #53787d

    &::after
        content ''
        display inline-block
        height 100%
        vertical-align middle
</style>
