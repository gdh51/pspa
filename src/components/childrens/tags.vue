<template>
<div id='tag-cloud'>
  <div class='tag-cloud-title'>Tags - {{tags.length}}</div>
  <div class='tag-cloud-tags base'>
    <router-link v-for='tag in tags' :key='tag._id' :to='tag.path'
     :style="{fontSize:Math.random()*2+'em',opacity:Math.random()+0.2}"
     class='rotate'>
      {{tag.tag}}
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name:'tag-cloud',
  data(){
    return {
      tags:[]
    }
  },
  created() {
    let that=this;
    this.$axios.get('./tags').then(function(e){
      that.tags=e.data.docs;
      that.$store.commit('toggleLoding');
    });
  },
}
</script>

<style scoped>
#tag-cloud{
  padding: 4.5rem 0 7rem;
  text-align: center;
}

#tag-cloud .tag-cloud-title{
  font-size: 1.8rem;
  color: aquamarine;
}

#tag-cloud a{
  display: inline-block;
  top:.5rem;
  left: .5rem;
  color:#FEDE4B;
  margin: 0 .4rem;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s linear;
}

#tag-cloud a:hover{
  color:rgb(248, 159, 6);
  animation: bounce 0.1s 3;
}
@keyframes bounce{
  0%{
    transform: translateY(10px);
  }
  50%{
    transform: translateY(0);
  }
  100%{
    transform:translateY(-10px);
  }
}
</style>


