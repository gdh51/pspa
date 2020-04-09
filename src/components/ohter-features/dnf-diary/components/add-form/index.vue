<template>
    <div class="add_form-container">
        <suit-table v-for="suit in suits"
                   :key="suit.name"
                   :suit-eps="suit"
                    class="add_form-suit"
                   @select-ep="addEp"/>
    </div>
</template>

<style lang="stylus" scoped>
.add_form-container
    display flex
    justify-content space-around
    flex-wrap wrap

    .add_form-suit
        margin 10px
</style>

<script>
import SuitTable from './components/suit-table/index'
import { hasSchemaPart, outputSchema, updateSchemaPart } from '../abyss-helper/wish-table/index'
import { initEquipment } from '../abyss-helper/equipment/index.js'
import { deepClone } from '../../../../../shared/index'

export default {
    name: 'AddForm',

    props: ['remoteSuits', 'sort', 'selectedSchames', 'inner'],

    data () {
        return {
            suits: [],
            schema: outputSchema(this.sort)
        };
    },

    components: {
        SuitTable
    },

    created() {
        if (this.remoteSuits) {
            return this.suits = this.createSuits(this.remoteSuits, this.selectedSchames);
        }
        this.$axios.get('/eps').then(suits => {
            initEquipment(Object.freeze(suits));

            // 存储原始的配置
            this.$emit('collectRemoteEps', suits);

            this.suits = this.createSuits(suits, this.selectedSchames);
        });
    },

    methods: {
        addEp (ep) {

            // 添加
            if (!ep.selected) {

                // 如果该部位已拥有则不能继续选择
                if (hasSchemaPart(ep, this.schema, this.inner)) {
                    return;
                }

                updateSchemaPart(ep, this.schema, this.inner);
            } else {

                // 移除
                updateSchemaPart(ep, this.schema, this.inner, true);
            }

            ep.selected = !ep.selected;

            // 传递想要在弹窗关闭时，传入的数据
            this.$root.$emit('close', this.schema);
        },

        createSuits (suits, selectedSchames) {
            let initSuits = suits
                .filter(suit => !this.sort || (suit.sort === this.sort))
                .map((suit, index) => {
                    let result = deepClone(suit);
                    result.eps.forEach(ep => {
                        ep.selected = false;
                        ep.suit = index;
                    });
                    return result;
                });

            // 处理初始化表格前就已选中的某些装备
            selectedSchames && selectedSchames.forEach(schema => {
                let ep = null;
                for(let part in schema) {

                    // 被选中的对应部位
                    ep = schema[part];

                    // 已勾选过的装备，则点亮
                    if (ep) {

                        // 之前选中的添加至表中
                        this.schema[part] = ep;

                        // 将对应套装的对应部位点亮
                        initSuits[ep.suit].eps.forEach(iEp => {
                            iEp.part === ep.part && iEp.myth === ep.myth && (iEp.selected = true);
                        });
                    }
                }
            });

            return initSuits;
        }
    }
}
</script>