<template>
    <div id='categories'>
        <div class='categories-list'>
            <div class='categories-title'>
                Categories - {{categories.length}}
            </div>
            <div>
                <sub-list :categories="categories"></sub-list>
            </div>
        </div>
    </div>
</template>

<script>
import SubList from './components/sub-list';
export default {
    name: 'Categories',
    data: function() {
        return {
            categories: []
        };
    },

    components: {
        SubList
    },
    created() {
        this.$axios.get('./categories').then(data => {
            this.categories = data;
        });
    }
};
</script>

<style scoped>
#categories {
    margin-bottom: 1rem;
}

#categories .categories-list {
    padding: 3rem 0 3rem;
}

#categories .categories-list .categories-title {
    text-align: center;
    font-size: 1.8rem;
    color: aquamarine;
}

#categories a:hover {
    color: #4ccb70;
}
</style>
