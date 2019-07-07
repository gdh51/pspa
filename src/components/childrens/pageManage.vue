<template>
  <nav id='pageManage'>
    <div class='pageManage'>
      <router-link :to='path+(this.current-1)' class='prev' v-if='current!=1'><</router-link>
      <router-link :to='path+1' class='page-number' v-if='total!==1' :class="[current==1?'current':'']">1</router-link>
      <span class='space' v-if='prevShow'>...</span>
      <router-link :to='path+index' class='page-number' v-for='index in middlePages' :key='index' :class="[current==index?'current':'']">{{index}}</router-link>
      <span class='space' v-if='nextShow'>...</span>
      <router-link :to='path+total' class='page-number' :class="[current==total?'current':'']">{{total}}</router-link>
      <router-link :to='path+(this.current+1)' class='next' v-if='current!=total'>></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name:'pageManage',
  data(){
    return {
      current:1,
      prevShow:false,
      nextShow:true,
      path:'archives?currentPage='
    }
  },
  computed: {
    total(){
      return parseInt(this.$store.state.totalPage);
    },
    middlePages(){
      let middle=[];//存储中间页码
      if(this.total<=5){///4页以内
        this.prevShow=this.nextShow=false;
          for(let i=2;i<this.total;i++){
            middle.push(i);
          }
      }else if(this.total>5){
        if(this.current<4){//1-2
        this.prevShow=false;
        this.nextShow=true;
        middle.push(2,3,4);
        }else if(this.current<this.total-2){//除去最后三页
        this.prevShow=this.nextShow=true;
        middle.push(this.current-1,this.current,this.current+1);
        }else{
          this.nextShow=false;
          this.prevShow=true;
          middle.push(this.total-3,this.total-2,this.total-1);
        }
      }
      return middle;
    }
  },
  watch: {
    '$route'(to){
      if(to.path=='/'){
        this.current=1;
      }else{
        this.current=parseInt(to.query.currentPage);
      }
      this.path=to.path+'?currentPage=';
    }
  },
}
</script>

<style scoped>
#pageManage .pageManage{
  text-align: center;
}

#pageManage .pageManage a:hover{
  cursor: pointer;
  color:#53787D;
}

#pageManage .pageManage .page-number{
  display: inline-block;
  margin: 0 .2rem;
  min-width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  line-height: 1.2rem;
  cursor: pointer;
}

#pageManage .pageManage .current{
  background-color:#53787D;
  color:#fff;
  cursor:default;
}

#pageManage .pageManage .current:hover{
  color:aquamarine;
}

#pageManage .pageManage .space{
  color:#FCCE77;
}

#pageManage .pageManage .next{
  color:#FCCE77;
  font-weight: 700;
  margin-left: .3rem;
}
</style>

