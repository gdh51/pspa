<template v-if='categories.length'>
    <ul>
        <li v-for='item in categories'
           :key='item.id'>
            <router-link :to="'/tags/' + item.title">
                {{ item.title }}
            </router-link>
            <span class='categories-list-count'>{{ item.tags.length }}</span>
            <template v-if="item.tags.length">
                <sub-list :categories="item.tags"/>
            </template>
        </li>
    </ul>
</template>

<style scoped>
.categories-list-count {
    margin-left: 0.4rem;
    color: #eee7da;
}

.categories-list-count::before {
    content: '(';
}

.categories-list-count::after {
    content: ')';
}
</style>

<script>
export default {
    name: 'SubList',
    props: {
        categories: {
            type: Array,
            default: []
        }
    }
}
</script>