<style lang="stylus" scoped>
.dialog-wrapper
    position fixed
    display inline-block
    text-align center

    .dialog-container
        display inline-block
        vertical-align middle

        .dialog-title
            height 30px
    &:after
        content ''
        display inline-block
        height 100%
        vertical-align middle
</style>

<script>
export default {
    name: 'Dialog',
    props: {
        title: {
            type: [String, Boolean],
            default: false
        }
    },

    render(h) {
        let children = [];
        if (this.title) {
            children.push(
                h('div', {
                    staticClass: 'dialog-title'
                    },
                    this.title
                )
            );
        }

        if (this.$slots.default) {
            children.push(this.$slots.default)
        }

        return h('div', {
            staticClass: 'dialog-container'
        });
    },

    data () {
        return {};
    }
}
</script>