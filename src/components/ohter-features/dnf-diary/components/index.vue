<template>
    <div class="diary-container">
        <template v-if="equipmentTables.length">
            <single-table
                v-for="table in equipmentTables"
               :key="table.uid"
               :table-uid="table.uid"
               :title="table.title"/>
        </template>
    </div>
</template>

<style lang="stylus" scoped>
.diary-container
    width 100%
    height 100%
</style>

<script>
import SingleTable from './single-table/index'
import { } from './equipment'

export default {
    name: 'DiaryContainer',

    components: {
        SingleTable
    },

    data () {
        return {

            // 该变量仅用于拉取有多少表格及其大体信息
            equipmentTables: [{
                title:'左侧装备',
                uid: 1
            },
            {
                title:'右侧装备',
                uid: 2
            }]
        };
    }
}
</script>