<template>
    <div class="diary-container">
        <template v-if="wishTables.length">
            <single-table
                v-for="table in wishTables"
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
import AddForm from './add-form/index'
import { initTableManager } from './abyss-helper/table-manager.js'

// manager不需要全部响应式处理，所以不需要定义在state中
let manager = null;

export default {
    name: 'DiaryContainer',

    components: {
        SingleTable,
        MythColor
    },

    data () {
        return {

            // 该变量仅用于拉取有多少表格及其大体信息
            wishTables: [],
            remoteSuits: void 0
        };
    },

    methods: {
        addEquipment () {
            this.$modal({
                component: AddForm,
                width: '90vw',
                height: '80vh',
                props: {
                    remoteSuits: this.remoteSuits
                },
                title: '选择需要添加的装备',
                events: {
                    collectRemoteEps: eps => (this.remoteSuits = eps)
                }
            });
        }
    },

    created() {
        manager = initTableManager();
        console.log('初始化成功', manager);
        this.wishTables = manager.list;
    },
}
</script>