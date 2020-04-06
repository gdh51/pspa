<template>
    <div class="table-container">
        <div class="table-title">
            <div>{{ title }}</div>
            <div class="table-btns">
                <v-btn text="添加装备"
                       class="table-btns_single"
                      :disabled="equipments.length >= limit"
                      @btn-click="selectEquip"/>
                <v-btn text="删除该表"
                       class="table-btns_single"
                      @btn-click="delTable"/>
            </div>
            <ep-table :equipments="equipments"
                      @click-event="wishComeTrue(equipment)"/>
        </div>
        <polo-hr/>
    </div>
</template>

<style lang="stylus" scoped>
.table-container
    display flex
    flex-direction column

    .table-title
        display flex
        align-items center
        justify-content space-between
        padding 10px 20px
        color #70B991

        .table-btns
            display flex
            flex-direction column

            .table-btns_single
                height 20px
                line-height 20px

                &:first-of-type
                    margin-bottom 3px

</style>

<script>
import EpShowTable from '../common-ep-show-table/index'

export default {
    name: 'SingleTable',

    props: {
        title: {
            type: String,
            default: '无'
        },

        tableUid: {
            type: Number,
            required: true
        },

        limit: {
            type: Number,
            default: 5
        }
    },

    components: {
        EpShowTable
    },

    data () {
        return {
            equipments: [{ selected: true}, { selected: false}]
        };
    },

    methods: {
        wishComeTrue(equipment) {
            equipment.selected = !equipment.selected;

            // 等待加入localStorage操作
        },

        selectEquip(){},

        delTable(){}
    }
}
</script>