<template>
  <div id='categories'>
    <div class='categories-list'>
      <div class='categories-title'>
        Categories - {{categories.length}}
      </div>
      <div>
        <transition-group tag='ul'>
            <li v-for='item in categories' :key='item._id' v-if='item.total'>
              <router-link :to='item.path'>
                {{item.type}}
              </router-link>
              <span class='categories-list-count'>{{item.total}}</span>
              <ul>
                <li v-for="tag in item.tags" :key='tag.path' v-if='tag.total' >
                  <router-link :to='tag.path'>{{tag.tag}}</router-link>
                  <span class='categories-list-count'>{{tag.total}}</span>
                </li>
              </ul>
            </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"categories",
  data:function(){
    return {
      categories:[],
    }
  },
  created() {
    let that=this;
    this.$store.commit('togglePagebar');
    this.$axios.get('./categories').then(function(e){
      that.categories=e.data.docs;
      that.$store.commit('postPage',parseInt(e.data.docs[0].totalPage));
      that.$store.commit('toggleLoding');
    });
  },
  destroyed() {
    this.$store.commit('togglePagebar');
  },
}
</script>

<style scoped>
#categories{
  margin-bottom: 1rem;
}

#categories .categories-list{
  padding: 3rem 0 3rem;
}

#categories .categories-list .categories-title{
  text-align: center;
  font-size:1.8rem;
  color:aquamarine;
}

#categories .categories-list .categories-list-count{
  margin-left: .4rem;
  color:#EEE7DA;
}

#categories .categories-list .categories-list-count::before{
  content:"(";
}

#categories .categories-list .categories-list-count::after{
  content:")";
}

#categories a:hover{
  color:#4CCB70;
}
</style>
