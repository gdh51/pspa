<template>
    <div :class="selectedClass"
         @click="$emit('wish-come-true')">
    </div>
</template>

<style lang="stylus" scoped>
.equipment
    width 50px
    height 50px
    background-color red
    transition all .3s linear

.equipment-selected
    filter grayscale(100%)
</style>

<script>
export default {
    name: 'EquipmentImg',
    props: {
        selected: {
            type: Boolean,
            default: false
        },

        src: {
            type: String
        }
    },

    computed: {
        selectedClass () {
            return this.selected ? 'equipment' : 'equipment equipment-selected';
        }
    }
}
</script>