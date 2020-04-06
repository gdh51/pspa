<template>
    <div class="suit_container">
        {{ SuitEps.name }}
        <ep-show-table
             text="无当前套装信息"
            :equipments="SuitEps.eps"
            @click-event="selectedEp"/>
    </div>
</template>

<style lang="stylus" scoped>
.suit_container
    border 1px dashed #f9c835
    border-radius 3px
    padding-bottom 5px
    color #f9c835
</style>

<script>
import EpShowTable from '../../../common-ep-show-table/index'

export default {
    name: 'SuitTable',

    props: {
        SuitEps: {
            type: Object,
            default () {
                return {
                    name: '军神',
                    eps: []
                };
            }
        }
    },

    components: {
        EpShowTable
    },

    methods: {
        selectedEp(ep) {
            this.$emit('select-ep', ep);
        }
    }
}
</script>