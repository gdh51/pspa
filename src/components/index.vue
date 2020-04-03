<template>
    <div class="view-container">
        <header-container/>
        <!-- 内容容器 -->
        <content-container/>
        <!-- 内容容器 -->
        <footer-container v-bind="$attrs"></footer-container>
        <icon :class="iconClass"
              @click="toggleShrink"
               icon="toggle-sidebar"/>
        <dnf-abyss/>
    </div>
</template>

<style lang="stylus" scoped>
$color = #ffb129

>>>.toggle-sidebar
    position fixed
    z-index 3333
    bottom 20px
    left 16px
    font-size 16px
    cursor pointer
    color $color
    transform: rotateZ(180deg)
    transition all 0.3s linear

>>>.toggle-shrink
    transform: rotateZ(0)

@media screen and (max-width: 1024px)
    >>>.toggle-sidebar
        display none

</style>

<script>
import HeaderContainer from './viewport/header-container/index'
import FooterContainer from './viewport/footer-container/index'
import ContentContainer from './viewport/content-container/index'
import DnfAbyss from './ohter-features/dnf-diary'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Viewport',
    data () {
        return {}
    },

    components: {
        HeaderContainer,
        FooterContainer,
        ContentContainer,
        DnfAbyss
    },

    computed: {

        iconClass () {
            return this.isShrink ? 'toggle-shrink' : '';
        },

        ...mapState('sideBar/', ['isShrink'])
    },

    methods: {
        ...mapMutations('sideBar/', ['toggleShrink'])
    }
}
</script>