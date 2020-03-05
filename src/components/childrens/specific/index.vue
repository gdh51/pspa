<script>
import Common from '../common/index.vue';
export default {
    name: 'Specific',

    extends: Common,

    methods: {
        serachContent(type, title) {
            const params = this.$route.params;
            this.$axios.get(`/${params.pathMatch}/${params.title}`).then(tag => {
                this.tag = tag[0] || [];
            });
        }
    }
};
</script>


