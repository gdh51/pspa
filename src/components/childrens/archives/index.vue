<script>
import Common from '../common/index'
export default {
    name: 'archives',
    extends: Common,

    data: function() {
        return {
            tag: {
                title: 'Archives',
                articles: []
            }
        };
    },

    methods: {
        serachContent(type, title) {
            const params = this.$route.params;
            this.$axios.get(`/archives`).then(articles => {
                this.tag.articles = articles || [];
            });
        }
    }
};
</script>


