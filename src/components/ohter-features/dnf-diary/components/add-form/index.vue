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
import { initEquipment, createSuit } from '../abyss-helper/equipment/index.js'
export default {
    name: 'AddForm',

    props: ['remoteSuits'],

    data () {
        return {
            suits: [],
            selectedEps: []
        };
    },

    components: {
        SuitTable
    },

    created() {
        if (this.remoteSuits) {
            return this.suits = this.remoteSuits;
        }
        this.$axios.get('/eps').then(suits => {
            initEquipment(suits);
            this.suits = createSuit(suits);

            // 存储原始的配置
            this.$emit('collectRemoteEps', suits);
        });
    },

    methods: {
        addEp (ep) {

            // 添加
            if (!ep.selected) {
                this.selectedEps.push(ep);
            } else {

                // 移除
                this.selectedEps.splice(this.selectedEps.indexOf(ep), 1);
            }

            ep.selected = !ep.selected;
        }
    }
}
</script>