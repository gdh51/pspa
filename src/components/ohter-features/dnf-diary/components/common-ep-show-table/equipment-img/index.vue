<template>
    <div :class="selectedClass"
         :style="backgroundImg"
         @click="$emit('wish-come-true')">
    </div>
</template>

<style lang="stylus" scoped>
.equipment
    width 28px
    height 28px
    background-size cover
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
        },

        backgroundImg () {

            return (this.src ? {
                backgroundImage: `url('${require('./ep-imgs/' + this.src)}')`
            } : {});
        }
    }
}
</script>