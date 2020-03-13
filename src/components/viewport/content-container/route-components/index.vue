<template>
    <transition-group name="slide-in" tag="div">
        <section class='ar-item ar-container'
                 v-for='item in articles'
                 :key='item.time'>
            <a class='ar-title'>{{ item.title }}</a>
            <time class='ar-date'>{{ item.time }}</time>
            <span class='ar-meta'>
                <span class='ar-meta-separator'>｜</span>
                <icon icon="file"/>
                <router-link
                    class='ar-meta-categories'
                    :to="'tags/' + item.tags[0].title"
                >{{ item.tags[0].title }}</router-link>
                <span class='angle'> > </span>
                <icon icon="file"/>
                <router-link
                    :to="{ name: 'articles', query: { title: item.title } }"
                    class='ar-meta-categories'
                >{{ item.title }}</router-link>
            </span>
            <span class='ar-meta tags'>
                <span class='ar-meta-separator'>｜</span>
                <span
                    v-for='(category) in item.categories'
                    :key='category.title'
                >
                    <icon icon="links"/>
                    <router-link
                        class='ar-meta-tags'
                        :to="'tags/' + category.title"
                    >{{category.title}}</router-link>
                </span>
            </span>
            <l-markdown :text="item.content" />
            <router-link
                class='more'
                :to="{ name: 'articles', query: { title: item.title } }"
            >Read more</router-link>
            <polo-hr />
        </section>
    </transition-group>
</template>

<script>
export default {
    name: 'Index',

    data: function() {
        return {
            articles: []
        };
    },
    created() {
        this.$axios.get('/index').then(articles => {
            this.articles = articles;
        });
    }
};
</script>

<style lang="stylus" scoped>
.slide-in-enter-active
    transition all 0.3s ease

.slide-in-enter
    transform translateX(20px)
    opacity 0

.ar-item
    margin 1.6rem 0 2rem

    .ar-title
        display block
        margin-bottom 0.3rem
        border-bottom 1px solid #fcce77
        font-size 1.4rem
        color #ffb129
        transition all 0.2s ease
        cursor pointer

        &:hover
            color #70b991
            border-bottom 1px solid #70b991



    .ar-date
        color #a7a4a4


    .ar-meta
        color #e9e3e3

        a:hover
            color #70b991


        .ar-meta-separator
            margin-left 0.3rem


        i
            margin 0 0.2rem 0 0.3rem


        .angle
            font-size 0.5rem



    .content
        margin-top 0.5rem


    .more
        display inline-block
        padding 0 0.6rem
        height 1.6rem
        background #fcce77
        color rgb(144, 184, 167)
        text-align center
        text-decoration none
        line-height 1.6rem
        cursor pointer
        transition all 0.3s ease

        &:hover
            background-color #4ccb70
            color #fcce77
</style>