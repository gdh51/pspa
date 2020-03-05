<template>
    <div class="detail">
        <div class='archives-sort-title'>
            {{ tag.title }} - {{ tag.articles.length }}
        </div>
        <div class='archives-sort'>
            <div class='archives-sort-items year'>
                2019
            </div>
            <transition-group
                v-if="tag.articles.length"
                name='slide-in'
                appear
            >
                <div
                    class='archives-sort-items'
                    v-for='article in tag.articles'
                    :key='article.time'
                >
                    <time class='archives-sort-item_time'>
                        {{ article.time }}
                    </time>
                    <router-link
                        :to="{ name: 'articles',  query: { title: article.title } }"
                        class='archives-sort-item_title'
                    >
                        {{ article.title }}
                    </router-link>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchTag',

    data: function() {
        return {
            tag: {
                title: 'None',
                articles: []
            }
        };
    },

    created () {
        this.serachContent();
    },

    beforeRouteUpdate (to, from) {
        this.serachContent();
    }
};
</script>

<style scoped>
.slide-in-enter-active {
    transition: all 0.3s ease;
}
.slide-in-enter {
    transform: translateX(20px);
    opacity: 0;
}

.detail {
    padding: 3rem 0 3rem;
}
</style>
