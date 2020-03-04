<template>
    <div id='tag-cloud'>
        <div class='tag-cloud-title'>Tags - {{tags.length}}</div>
        <div class='tag-cloud-tags base'>
            <router-link
                v-for='tag in tags'
                :key='tag._id'
                :to="tag.type + '/' + tag.title"
                :style="{fontSize:Math.random()*2+'em',opacity:Math.random()+0.2}"
                class='rotate'
            >
                {{ tag.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tags',
    data() {
        return {
            tags: []
        };
    },
    created() {
        this.$axios.get('./tags').then(tags => {
            this.tags = tags;
        });
    }
};
</script>

<style scoped>
#tag-cloud {
    padding: 4.5rem 0 7rem;
    text-align: center;
}

#tag-cloud .tag-cloud-title {
    font-size: 1.8rem;
    color: aquamarine;
}

#tag-cloud a {
    display: inline-block;
    top: 0.5rem;
    left: 0.5rem;
    color: #fede4b;
    margin: 0 0.4rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s linear;
}

#tag-cloud a:hover {
    color: rgb(248, 159, 6);
    animation: bounce 0.1s 3;
}
@keyframes bounce {
    0% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-10px);
    }
}
</style>


