<template>
    <div class="table_equipments"
         v-if="normalEps.length">
         <template v-if="myth">
            <div class="table_equipments-eq-myth">
                <equipment-img
                    class="table_equipments-eq"
                   :selected="myth.selected"
                   :src="myth.uid + '.png'"
                   @wish-come-true="$emit('click-event', myth)"/>
            </div>
        </template>
        <equipment-img
            v-for="equipment in normalEps"
            class="table_equipments-eq"
           :key="equipment.key"
           :selected="equipment.selected"
           :src="equipment.uid + '.png'"
           @wish-come-true="$emit('click-event', equipment)"/>
    </div>
    <div v-else
         class="table_equipments table_equipments-empty">
        {{ text }}
    </div>
</template>

<style lang="stylus" scoped>
.table_equipments
    display flex
    justify-content center
    align-items center

    .table_equipments-eq
        margin 0 5px

    .table_equipments-eq-myth
        padding 4px
        margin-left 5px
        border 1px solid transparent
        border-image linear-gradient(#f9c835, #cc65e9) 1 10

        .table_equipments-eq
            margin 0

.table_equipments-empty
    color #F34F1D
    cursor pointer
</style>

<script>
import EquipmentImg from './equipment-img/index'

export default {
    name: 'EpShowTable',

    props: {
        equipments: {
            type: Array,
            default () {
                return [];
            }
        },

        // 无展示装备时显示的文本
        text: {
            type: String,
            default: '暂无装备，请点击添加'
        }
    },

    data () {
        return {
            myth: null
        };
    },

    components: {
        EquipmentImg
    },

    computed: {
        normalEps () {
            return this.equipments.filter(ep => {

                if (ep.myth) {
                    this.myth = ep;
                    return false;
                }

                return true;
            });
        }
    }
}
</script>