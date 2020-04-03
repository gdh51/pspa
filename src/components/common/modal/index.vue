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

    >>>.home
        position absolute
        top 10px
        right 20px
        font-size 24px
        color #000

&:after
    content ''
    display inline-block
    height 100%
    vertical-align middle
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
            staticClass: 'dialog-content'
        }, this.$slots.default));

        return h('MaskWrapper', {
            props: {
                visible: this.visible
            }
        }, [
            h('div', {
                staticClass: 'dialog-container',
                style: this.dialogStyle
            },
            children)
        ]);
    },

    computed: {
        dialogStyle () {
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