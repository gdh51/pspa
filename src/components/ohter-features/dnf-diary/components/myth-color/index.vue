<style lang="stylus" scoped>
 .myth
    background linear-gradient(#f9c835, #cc65e9)
    -webkit-background-clip text
    -moz-background-clip text
    -ms-background-clip text
    -o-background-clip text
    color transparent
</style>

<script>
export default {
    name: 'MythColor',

    props: {
        tag: {
            type: String,
            default: 'span'
        }
    },

    render (c) {
        return c(this.tag, {
            on: {
                click: () => this.$emit('click-event')
            },
            staticClass: 'myth'
        }, this.$slots.default || '深渊装备记录表');
    }
}
</script>