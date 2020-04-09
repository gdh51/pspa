<template>
    <div class="diary-container">
        <template v-if="wishTables.length">
            <single-table
                v-for="(table, index) in wishTables"
               :key="table.uid"
               :wt="table"
               :index="index"
               @wish-come-true="epWishComeTrue"
               @del-table="delTable"/>
        </template>
        <div
            :class="wishTables.length ? 'diary_ctx-top' : ''"
             class="diary_ctx-empty">
            <myth-color @click-event="addEquipment">
                {{ wishTables.length ? '点击继续添加' : '暂无深渊装备记录表，请点击添加' }}
            </myth-color>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.diary-container
    display flex
    flex-direction column
    width 100%
    height 100%

    .diary_ctx-empty
        margin auto
        font-size 30px
        cursor pointer

    .diary_ctx-top
        position absolute
        right 60px
        top 10px
        font-size 16px


</style>

<script>
import MythColor from './myth-color/index'
import SingleTable from './single-table/index'
import AddForm from './add-form/index'
import { initTableManager } from './abyss-helper/table-manager.js'
import { createWishTable } from './abyss-helper/wish-table'

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
                    collectRemoteEps: eps => (this.remoteSuits = eps),
                    hideTable: schema => {
                        let addTables = null;

                        for (let part in schema) {
                            if (this.hasEp(schema[part])) {
                                this.wishTables.push(createWishTable({
                                    tableSchema: schema[part],
                                    sort: part
                                }));
                            }
                        }
                    }
                }
            });
        },

        hasEp (schema) {
            for (let ep in schema) {
                if (schema[ep]) {
                    return true;
                }
            }
            return false;
        },

        epWishComeTrue (ep, wt) {
            ep.selected = !ep.selected;

            // 更新lc存储
            wt.updateEquipment(ep);
        },

        delTable(index) {
            this.wishTables.splice(index, 1);
        }
    },

    created() {
        manager = initTableManager();
        console.log('初始化成功', manager);
        this.wishTables = manager.list;
    }
}
</script>