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

            // 首先过滤出同种类型的所有套装
            let initSuitMap = {};

            suits

                // 如果添加新的套装，则提供全部套装进行选择
                // 如果添加或更换装备，则过滤掉不同套装类型的装备，仅提供相同套装类型装备进行添加
                .filter((suit, index) => {
                    suit.uid = index;

                    return !this.sort || (suit.sort === this.sort);
                })
                .map(suit => {

                    // 复制当前装备的原始数据进行初始化
                    let result = deepClone(suit);
                    result.eps.forEach(ep => {
                        ep.selected = false;

                        // 记录装备对于的套装id
                        ep.suit = suit.uid;
                    });

                    // 将数组形式的套装表按suit id -> suit的形式生成对象，方便查找
                    initSuitMap[suit.uid] = result;
                });

            // 处理初始化表格前就已选中的某些装备
            selectedSchames && selectedSchames.forEach(schema => {
                let ep = null;

                // 遍历装备槽，在刚刚初始化的表格中点亮装备槽中已有装备
                for(let part in schema) {

                    // 被选中的对应部位
                    ep = schema[part];

                    // 是否装备槽中某个部位的装备已存在
                    if (ep) {

                        // 之前选中的添加至表中
                        this.schema[part] = ep;

                        // 将对应套装的对应部位点亮
                        initSuitMap[ep.suit].eps.forEach(iEp => {
                            iEp.part === ep.part && iEp.myth === ep.myth && (iEp.selected = true);
                        });
                    }
                }
            });

            return Object.keys(initSuitMap).map(suitId => initSuitMap[suitId]);
        }
    }
}
</script>