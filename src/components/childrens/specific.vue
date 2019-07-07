<template>
  <div id='specific'>
    <div class='archives-sort-title'>
      {{this.fetchInfo.tag||this.fetchInfo.type}} - {{fetchInfo.articles.length}}
    </div>
    <div class='archives-sort' v-if='fetchInfo.articles.length'>
      <div class='archives-sort-items year'>
        2019
      </div>
      <transition-group name='slide-in' appear>
        <div class='archives-sort-items' v-for='item in fetchInfo.articles' :key='item.time'>
          <time class='archives-sort-item_time'>
            {{item.time}}
          </time>
          <router-link :to='item.path' class='archives-sort-item_title'>
            {{item.title}}
          </router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name:'specific',
  data:function () {
    return {
      fetchInfo:{"_id":'',"tag":'',"path":"","articles":[{"title":"","time":"","path":""}]}
    }
  },
  created() {
    this.$store.commit('togglePagebar');
    let that=this,params=this.$route.params;
    this.$axios.get("./"+params.tag+"/"+params.name+"").then(function(e){
      that.fetchInfo=e.data.docs[0];
      that.$store.commit('toggleLoding');
    });
  },
  destroyed() {
    this.$store.commit('togglePagebar');
  },
}
</script>

<style scoped>
.slide-in-enter-active{
  transition: all .3s ease;
}
.slide-in-enter{
  transform: translateX(20px);
  opacity: 0;
}

#specific{
  padding: 3rem 0 3rem;
}
</style>


