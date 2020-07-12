<template>
    <div class="dnf-lazy-load"
        @click="showTable">
        <myth-color/>
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
import MythColor from './components/myth-color/index'

export default {
    name: 'DnfAbyss',
    data () {
        return {
            singleton: null
        };
    },

    components: {
        MythColor
    },

    methods: {
        showTable() {
            let modal = this.singleton;
            if (modal) {
                return modal.$show();
            }

            import('./components/index').then((Diary) => {
                this.singleton = this.$modal({
                    component: Diary.default,
                    width: '90vw',
                    height: '80vh',
                    title: '深渊记录表！',
                    hideEvent: () => this.singleton.$hide()
                });
            });
        }
    }
}
</script>