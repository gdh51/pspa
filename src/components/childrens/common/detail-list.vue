<template>
    <div class="detail">
        <div class='archives-sort-title'>
            Archives - {{archives.length}}
        </div>
        <div class='archives-sort'>
            <div class='archives-sort-items year'>
                2019
            </div>
            <transition-group
                name='slide-in'
                appear
            >
                <div
                    class='archives-sort-items'
                    v-for='item in archives'
                    :key='item.time'
                >
                    <time class='archives-sort-item_time'>
                        {{item.time}}
                    </time>
                    <router-link
                        :to='item.title'
                        class='archives-sort-item_title'
                    >
                        {{item.title}}
                    </router-link>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',

    props: {
        title: {
            type: String,

        }
    },

    data: function() {
        return {
            titles: []
        };
    },
    created() {
        this.$axios.get('./archives').then(titles => {
            this.titles = titles;
        });
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


