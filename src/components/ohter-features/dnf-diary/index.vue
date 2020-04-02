<template>
    <div class="dnf-lazy-load"
        @click="showTable">
        深渊装备记录表
    </div>
</template>

<style lang="stylus" scoped>
.dnf-lazy-load
    position fixed
    right 0
    top 50%
    width 40px
    padding 2px
    border-radius 5px
    background-color #eee7da
    color #4CCB70
    text-align center
    cursor pointer
</style>

<script>
export default {
    name: 'DnfAbyss',
    data () {
        return {
            singleton: null
        };
    },

    methods: {
        showTable() {
            let modal = this.singleton;
            if (modal) {
                return modal.$show();
            }
            // this.$modal();
        }
    }
}
</script>