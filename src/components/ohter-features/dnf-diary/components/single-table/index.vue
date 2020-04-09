<template>
    <div class="table-container">
        <div class="table-title">
            <div>{{ wt.name }}</div>
            <ep-show-table :equipments="normalizedEps"
                      @click-event="wishComeTrue"/>
            <div class="table-btns">
                <v-btn text="添加装备"
                       class="table-btns_single"
                      :disabled="normalizedEps.length >= wt.limit"
                      @btn-click="selectEquip"/>
                <v-btn text="删除该表"
                       class="table-btns_single"
                      @btn-click="delTable"/>
            </div>
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
                min-width 80px
                line-height 20px

                &:first-of-type
                    margin-bottom 3px

    @media screen and (max-width 1024px)
        .table-title
            display flex
            flex-direction column
            align-items center
            justify-content space-between
            padding 10px 20px
            color #70B991

            .table-btns
                display flex
                flex-direction row
                justify-content center
                margin-top 10px

                .table-btns_single
                    height 20px
                    min-width 80px
                    line-height 20px

                    &:first-of-type
                        margin-right 3px
</style>

<script>
import EpShowTable from '../common-ep-show-table/index'
import AddForm from '../add-form/index'

export default {
    name: 'SingleTable',

    props: {
        wt: {
            type: Object
        },
        index: {
            type: Number
        }
    },

    components: {
        EpShowTable,
        AddForm
    },

    methods: {
        wishComeTrue(ep) {
            this.$emit('wish-come-true', ep, this.wt);
        },

        selectEquip(){
            this.$modal({
                component: AddForm,
                width: '70vw',
                height: '80vh',
                props: {
                    remoteSuits: this.$parent.remoteSuits,
                    sort: this.wt.sort,
                    selectedSchames: [this.wt.raw.tableSchema],
                    inner: true
                },
                title: '继续添加装备',
                events: {
                    hideTable: schema => {

                        let ep = null,
                            wtSchema = this.wt.schema;

                        // 遍历添加出来的装备，找到添加了装备的几个部位
                        for (let part in schema) {
                            ep = schema[part];

                            // 当添加不同部位或相同不为不同装备时，更新
                            if (ep && (!wtSchema[part] || wtSchema[part].uid !== ep.uid)) {
                                ep.selected = false;
                                this.wt.addEquipment(ep, true);
                            }
                        }
                    }
                }
            });
        },

        delTable(){
            this.wt.removeTable();
            this.$emit('del-table', this.index);
        }
    },

    computed: {

        normalizedEps () {
            let schema = this.wt.schema,
                eps = [];

            for (let part in schema) {

                if (schema[part]) {
                    eps.push(schema[part]);
                }
            }

            return eps;
        }
    }
}
</script>