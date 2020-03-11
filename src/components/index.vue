<template>
    <div class="view-container">
        <header-container/>
        <!-- 容器 -->
        <container></container>
        <!-- 容器 -->
        <footer-container v-bind="$attrs"></footer-container>
        <icon :style="iconStyle"
              @click="toggleShrink"
               icon="toggle-sidebar"/>
    </div>
</template>

<style lang="stylus" scoped>
$color = #ffb129

>>>.toggle-sidebar
    position fixed
    z-index 3333
    bottom 20px
    left 316px
    font-size 16px
    cursor pointer
    color $color
    transition all 0.5s linear

@media screen and (max-width: 768px)
    >>>.toggle-sidebar
        display none
        position fixed
        bottom 20px
        left 16px
        z-index 100
        font-size 16px
        cursor pointer
        color $color
        transition all 0.5s linear

@media screen and (max-width: 1024px)
    >>>.toggle-sidebar
        display none

</style>

<script>
import HeaderContainer from './viewport/header-container/index'
import FooterContainer from './viewport/footer-container/index'
import Container from './container'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Viewport',
    data () {
        return {}
    },

    components: {
        HeaderContainer,
        FooterContainer,
        Container
    },

    computed: {
        iconStyle () {
            let degree = this.isShrink ? '180deg' : '0deg';
            return { transform: 'rotateZ(' + degree + ')' };
        },

        ...mapState('sideBar/', ['isShrink'])
    },

    methods: {
        ...mapMutations('sideBar/', ['toggleShrink'])
    }
}
</script>