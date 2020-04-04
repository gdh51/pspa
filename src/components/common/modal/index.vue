<style lang="stylus" scoped>
.dialog-container
    position relative
    display inline-block
    vertical-align middle
    border-radius 5px
    background-color #fff

    .dialog-title
        padding 10px 20px
        font-size 16px
        text-align left
        color #fede4b

    .dialog-content
        padding 10px
        overflow auto

    >>>.home
        position absolute
        top 10px
        right 20px
        font-size 24px
        color #000
        cursor pointer

        &:hover
            color #fede4b
</style>

<script>
import MaskWrapper from '../mask/index';
import { normalizeSize } from './util/index';

export default {
    name: 'Dialog',
    props: {
        title: {
            type: [String, Boolean],
            default: false
        },

        visible: {
            type: Boolean,
            default: false
        },

        width: {
            type: [Number, String],
            default: '50vw'
        },

        height: {
            type: [Number, String],

            default: '40vh'

        }
    },

    components: {
        MaskWrapper
    },

    render(h) {
        let children = [h('icon', {
            staticClass: 'home',
            on: {
                click: this.slideTable
            }
        })];
        if (this.title) {
            children.push(
                h('div', {
                    staticClass: 'dialog-title',

                }, this.title)
            );
        }

        // 添加插槽
        children.push(h('div', {
            staticClass: 'dialog-content',
            style: this.dialogContentStyle
        }, this.$slots.default));

        return h('MaskWrapper', {
            props: {
                visible: this.visible
            }
        }, [
            h('div', {
                staticClass: 'dialog-container'
            },
            children)
        ]);
    },

    computed: {
        dialogContentStyle () {
            return {
                width: normalizeSize(this.width),
                height: normalizeSize(this.height)
            };
        }
    },

    methods: {
        slideTable () {
            this.$emit('hide-table');
        }
    }
}
</script>