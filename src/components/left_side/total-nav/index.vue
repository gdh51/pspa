<template functional>
    <div class="total-nav">
        <img class='myphoto'
            src='../../../assets/img/photo.jpg'/>
        <p>Lazybones</p>
        <p>Move on</p>
        <a href='https://github.com/gdh51'
           class='info-git'>Git Me</a>
        <polo-hr />
        <nav class='info-tag'>
            <router-link to='/articles?currentPage=1'>
                <span class='tag-name'>Articles</span>
                <span class='tag-num'>{{ props.articles }}</span>
            </router-link>
            <router-link to='/tags'>
                <span class='tag-name'>Tags</span>
                <span class='tag-num'>{{ props.tags }}</span>
            </router-link>
            <router-link to='/categories?currentPage=1'>
                <span class='tag-name'>Catalog</span>
                <span class='tag-num'>{{ props.categories }}</span>
            </router-link>
        </nav>
        <polo-hr />
        <address class='info-links'>
            <p class='info-links-title'>Links</p>
            <router-link class='info-links-tag'
                         to='/'>Lazybones</router-link>
        </address>
    </div>
</template>

<script>
export default {
    name: 'TotalNav',
    props: {
        categories: {
            type: Number,
            default: 0
        },

        tags: {
            type: Number,
            default: 0
        },

        articles: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="stylus" scoped>
@keyframes bounce
    0%
        transform scale(1)

    50%
        transform scale(1.5)

    100%
        transform scale(1)

@keyframes changecolor
    0%
        background-position 0% 0%

    50%
        background-position 50% 100%

    100%
        background-position 100% 0



$orange = #ffb129

.total-nav
    margin-left -0.25rem
    padding 0.5rem
    width 100%
    text-align center

    .myphoto
        display block
        width 5rem
        height 5rem
        padding 4px
        margin 0 auto
        border 1px solid $orange


    p
        &:nth-of-type(1)
            font-size 0.8rem


        &:nth-of-type(2)
            color #70b991



    .info-git
        display inline-block
        margin-top 0.2rem
        padding 0 1rem
        height 1.6rem
        line-height 1.6rem
        color $orange
        background-color #70b991
        text-decoration none
        transition all 0.4s ease


    a:hover
        animation bounce 0.5s 1, changecolor 5s infinite linear
        background-image linear-gradient(45deg, #7affaf, #70b991, #70b991, #7a88ff, #7affaf)
        background-size 1000% 200%
        color #efffff
        cursor pointer


    .info-tag
        padding 0.2rem 0

        a
            display: block;
            margin-bottom: 0.4rem;
            padding: 0.2rem 0.4rem;
            height: 1.8rem;
            line-height: 2;
            color: $orange;
            background-color: #70b991;

            &:hover
                color: #fff;

                .tag-num
                    color: #70b991;



            .tag-name
                float: left;
                padding-left: 1rem;


            .tag-num
                position: relative;
                float: right;
                width: 2.5rem;
                height: 1.8rem;
                margin: -0.2rem -0.4rem;
                background-color: #ffffff;
                line-height: 1.8rem;

                &::before
                    position: absolute;
                    left: -0.8rem;
                    content: '';
                    width: 0;
                    height: 0;
                    border-top: 0.9rem solid transparent;
                    border-right: 0.8rem solid #fff;
                    border-bottom: 0.9rem solid transparent;


    .info-links
        .info-links-title
            margin-bottom 0.4rem


        .info-links-tag
            position relative
            float left
            margin-right 0.3rem
            margin-bottom 0.3rem
            padding 0 0.4rem 0 0.8rem
            color $orange
            background-color #70b991

            &:hover
                color #efffff

                &::before
                    background-color #efffff


            &::before
                position absolute
                top 50%
                left 0.25rem
                margin-top -0.15rem
                height 0.3rem
                width 0.3rem
                border-radius 0.3rem
                content ''
                background-color $orange
</style>