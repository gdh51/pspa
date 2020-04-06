<template>
    <div class="table_equipments"
         v-if="equipments.length">
        <equipment-img
            v-for="equipment in equipments"
            class="table_equipments-eq"
           :key="equipment.key"
           :selected="equipment.selected"
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

    .table_equipments-eq
        margin 0 5px

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


    components: {
        EquipmentImg
    }
}
</script>