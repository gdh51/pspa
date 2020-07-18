<template>
    <footer class="footer-container">
        <address class='layout'>
            <div>©2019 By Lazybones</div>
            <div>visited</div>
            <div class='count'>
                <span>
                    <v-icon icon="viewicon"/>
                    <span class='viewcount'>{{ view }}</span>
                </span>
            </div>
        </address>
        <v-icon icon="top-arrow"
             @click="scrollToTop"/>
    </footer>
</template>


<script>
export default {
    name: 'FooterContainer',

    props: {
        view: {
            type: Number,
            default: 0
        }
    },
    methods: {
        scrollToTop() {
            if (window.scrollTo) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                document.documentElement.scrollTop = 0;
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.footer-container
    position relative
    margin-top 1rem
    background-image url('../../../assets/img/bcimg.jpg')
    background-position bottom
    background-size cover
    background-attachment fixed

    .layout
        padding 2rem 1rem
        color #fede4b
        text-align center
        margin 0 auto


    >>>.viewicon::after
        content '\e9e3'
        font-weight normal


    .viewcount
        padding-left 0.3rem


    >>>.top-arrow::before
        position fixed
        transform rotateZ(-90deg)
        color #fede4b
        font-weight 700
        bottom 0.3rem
        right 0.3rem
        cursor pointer
</style>
