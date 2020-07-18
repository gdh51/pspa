<template>
    <address class='nav-info'>
        <span class='nav-name nav-title'>{{ title }}</span>
        <span
            class='nav-motto nav-title'
            v-if="!isInArticle"
        >{{ motto }}</span>
        <span class='nav-other-links'
              v-if="!isInArticle">
            <a href="https://github.com/gdh51"
               class='links-icon'
            ><v-icon icon="github"/></a>
            <a href=""
               class='links-icon'
            ><v-icon icon="weibo"/></a>
            <a href=""
               class='links-icon'
            ><v-icon icon="twitter"/></a>
            <a href=""
               class='links-icon'
            ><v-icon icon="steam"/></a>
            <a href=""
               class='links-icon'
            ><v-icon icon="qq"/></a>
            <a href=""
               class='links-icon'
            ><v-icon icon="search"/></a>
        </span>
    </address>
</template>

<style lang="stylus" scoped>
.nav-info
    display inline-block
    vertical-align middle

    .nav-title
        display block
        text-align center
        text-shadow 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15)
        color #fede4b
        line-height 1.5


    .nav-name
        font-size 2rem
        font-weight 700

    .nav-motto
        font-size 1.2rem
        opacity 0.7

    .nav-other-links
        display block
        margin 0 auto
        width 15rem
        text-align center

        .links-icon
            margin 0 0.5rem
            color #fede4b
            opacity 0.8
            text-shadow 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15)
            font-size 1.4rem
            cursor pointer

        &:hover
            opacity 1

@media screen and (max-width: 1024px)
    .nav-info
        .nav-name
            font-size 1.3rem
            font-weight 700

        .nav-motto
            font-size 0.8rem
            opacity 0.7
</style>

<script>
import { mapState } from 'vuex'

export default {
    name: 'HeaderContent',
    data () {
        return {
            title: 'I Miss You',
            motto: 'Blink 182'
        }
    },

    watch: {
        $route(to, from) {
            if (to.path == '/articles') {
                this.title = to.query.title || 'No Content';
            } else {
                this.title = 'Laybones';
            }
        }
    },

    computed: {
        ...mapState('sideBar/', ['isInArticle'])
    }
}
</script>