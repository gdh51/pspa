<template>
    <div class='side-nav-info'>
        <div class='side-nav-topic'>Catalog</div>
        <div class='side-nav-process'>
            <div class="process-tip">You've read 0 %</div>
            <div class='process-bar'></div>
        </div>
        <div class='side-nav-ctx'>
            <l-catalog v-bind="nodesTree" />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
$lightgreen = #4ccb70
.side-nav-info
    padding-right .5rem

    .side-nav-topic
        margin-top 0.3rem
        padding-right 0.4rem
        text-align center
        font-size 0.8rem


    .side-nav-process
        padding-left 0.5rem
        font-size 0.6rem
        color $lightgreen

        .process-bar
            width 100%
            height 0.06rem
            background-color $lightgreen



    .side-nav-ctx
        padding-left 0.3rem
        margin-top 0.1rem
        color #96918b

        >>>.sub_item-subtitle:hover
            color #fcce77

        >>>.catalog-container
            position static
            width auto



</style>

<script>
export default {
    name: 'article-nav',

    computed: {
        sideBarState() {
            return this.$store.state.sideBar;
        },

        nodesTree() {
            return {
                nodesTreeMap: this.sideBarState.nodesTreeMap,
                threshhold: 0
            };
        }
    }
};
</script>

