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
import { initEquipment } from '../abyss-helper/equipment/index.js'
export default {
    name: 'AddForm',
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
        this.$axios.get('/eps').then(suits => {
            this.suits = suits;
            initEquipment(suits);
        });
    },

    methods: {
        addEp (ep) {
            this.selectedEps.push(ep);
        }
    }
}
</script>