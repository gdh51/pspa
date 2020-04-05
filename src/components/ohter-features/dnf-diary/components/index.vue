<template>
    <div class="diary-container">
        <template v-if="equipmentTables.length">
            <single-table
                v-for="table in equipmentTables"
               :key="table.uid"
               :table-uid="table.uid"
               :title="table.title"/>
        </template>
        <div v-else
             class="diary_ctx-empty">
            <myth-color @click-event="addEquipment">暂无深渊装备记录表，请点击添加</myth-color>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.diary-container
    display flex
    width 100%
    height 100%

    .diary_ctx-empty
        margin auto
        font-size 30px
        cursor pointer



</style>

<script>
import MythColor from './myth-color/index'
import SingleTable from './single-table/index'

export default {
    name: 'DiaryContainer',

    components: {
        SingleTable,
        MythColor
    },

    data () {
        return {

            // 该变量仅用于拉取有多少表格及其大体信息
            equipmentTables: []
        };
    },

    methods: {
        addEquipment () {

        }
    }
}
</script>