<template>
    <div class="v-input"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false">
        <input @input="handleInput"
               @change="handleChange"
               @focus="handleFocus"
               @blur="handleBlur"
               @compositionStart="handleCompositionStart"
               @compositionUpdate="handleCompositionUpdate"
               @compositionEnd="handleCompositionEnd"
                type="text"
                class="v-input_inner"
               :placeholder="placeholder"
               :value="value">

        <!-- 输入框前置内容 -->
        <span class="v-input_prefix"
              v-if="getPrefixVisible()"></span>

        <!-- 输入框后置内容 -->
        <span class="v-input_suffix"
              v-if="getSuffixVisible()">
            <span class="v-input_clear"
                  v-if="showClear">×</span>
        </span>
    </div>
</template>

<style lang="stylus" scoped>
.v-input
    position relative
    display inline-block
    font-size 14px
    width 100%

    .v-input_inner
        display inline-block
        width 100%
        height 40px
        padding 0 15px
        line-height 40px
        font-size inherit
        color #70b991
        border-radius 4px
        border 1px solid #dcdfe6
        outline none

        &:hover,
        &:focus
            border-color #f9c835
        &::placeholder
            color #dcdfe6

    .v-input_prefix,
    .v-input_suffix
        position absolute
        top 0
        right 10px
        height 100%
        transition all .3s
        color #f9c835

    .v-input_suffix
        .v-input_clear
            font-size 14px
            color #f9c835
            text-align center
            line-height 40px
            cursor pointer
            transition all .3s

            &:hover
                color #ffb129
</style>

<script>
export default {
    name: 'VInput',
    props: {
        value: [String, Number],
        disabled: Boolean,
        placeholder: String,
        clearable: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            isHovering: false,
            isFocusing: false,

            // 复合事件，即打拼音
            isComposing: false
        };
    },

    computed: {

        // 是否显示清空输入框按钮
        showClear () {
            return (this.isFocus || this.isHovering);
        }
    },

    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        },

        handleChange(event) {
            this.$emit('change', event.target.value);
        },

        handleFocus(event) {
            this.isFocusing = true;
            this.$emit('focus', event);
        },

        handleBlur(event) {
            this.isFocusing = false;
            this.$emit('blur', event);
        },

        handleCompositionStart() {
            this.isComposing = true;
        },

        handleCompositionUpdate() {
            this.isComposing = true;
        },

        handleCompositionEnd(event) {
            if (this.isComposing) {
                this.isComposing = false;

                // 触发值更新更新值
                this.handleInput(event);
            }
        },

        getPrefixVisible() {
            return ;
        },

        // 控制后置区域是否显示，只要后置区域某个功能上线，则显示
        getSuffixVisible() {
            return this.showClear;
        }
    }
}
</script>