<template>
  <nav id='page-manage'>
    <div class='page-manage'>
      <router-link
        :to='path+(this.current-1)'
        class='prev'
        v-if='current!=1'
      >
        <</router-link>
          <router-link
          :to='path+1'
          class='page-number'
          v-if='totalPage!==1'
          :class="[current==1?'current':'']"
        >1
      </router-link>
      <span
        class='space'
        v-if='prevShow'
      >...</span>
      <router-link
        :to='path+index'
        class='page-number'
        v-for='index in middlePages'
        :key='index'
        :class="[current==index?'current':'']"
      >{{index}}</router-link>
      <span
        class='space'
        v-if='nextShow'
      >...</span>
      <router-link
        :to='path+totalPage'
        class='page-number'
        :class="[current==totalPage?'current':'']"
      >{{totalPage}}</router-link>
      <router-link
        :to='path+(this.current+1)'
        class='next'
        v-if='current!=totalPage'
      >></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "pageManage",

  data() {
    return {
      current: 1,
      prevShow: false,
      nextShow: true,
      path: "archives?currentPage="
    };
  },

  computed: {
    totalPage() {
      return parseInt(this.$store.state.totalPage);
    },
    middlePages() {
      let middle = []; //存储中间页码
      if (this.totalPage <= 5) {
        ///4页以内
        this.prevShow = this.nextShow = false;
        for (let i = 2; i < this.totalPage; i++) {
          middle.push(i);
        }
      } else if (this.totalPage > 5) {
        if (this.current < 4) {
          //1-2
          this.prevShow = false;
          this.nextShow = true;
          middle.push(2, 3, 4);
        } else if (this.current < this.totalPage - 2) {
          //除去最后三页
          this.prevShow = this.nextShow = true;
          middle.push(this.current - 1, this.current, this.current + 1);
        } else {
          this.nextShow = false;
          this.prevShow = true;
          middle.push(this.totalPage - 3, this.totalPage - 2, this.totalPage - 1);
        }
      }
      return middle;
    }
  },
  watch: {
    $route(to) {
      if (to.path == "/") {
        this.current = 1;
      } else {
        this.current = parseInt(to.query.currentPage);
      }
      this.path = to.path + "?currentPage=";
    }
  }
};
</script>

<style scoped>
#page-manage .page-manage {
  text-align: center;
}

#page-manage .page-manage a:hover {
  cursor: pointer;
  color: #53787d;
}

#page-manage .page-manage .page-number {
  display: inline-block;
  margin: 0 0.2rem;
  min-width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  line-height: 1.2rem;
  cursor: pointer;
}

#page-manage .page-manage .current {
  background-color: #53787d;
  color: #fff;
  cursor: default;
}

#page-manage .page-manage .current:hover {
  color: aquamarine;
}

#page-manage .page-manage .space {
  color: #fcce77;
}

#page-manage .page-manage .next {
  color: #fcce77;
  font-weight: 700;
  margin-left: 0.3rem;
}
</style>

