<script>
export default {
  name: 'article-render',

  render(h) {
    return h('div',
    [
      h(this.hnum, {
        ref: this.hnum
      }, this.content.title),
      h('div', {
        domProps: {
          innerHTML: this.content.text
        }
      })
    ]
    )
  },

  props: {
    hnum: {
      type: String,
      default: 'h1'
    },
    content: {
      type: Object,
      default: {
        title: 'none',
        text: '<p>当前请求为空</p>'
      }
    }
  },

  mounted() {
    this.$store.commit('collectHtag', this.$refs[this.hnum]);
  }
}
</script>

