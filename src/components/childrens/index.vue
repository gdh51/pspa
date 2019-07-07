<template>
  <transition-group
    id='index'
    name='slide-in'
    tag='div'
  >
    <article
      class='ar-item ar-container'
      v-for='item in articles'
      :key='item.time'
    >
      <a class='ar-title'>{{item.title}}</a>
      <time class='ar-date'>{{item.time}}</time>
      <span class='ar-meta'>
        <span class='ar-meta-separator'>｜</span>
        <i class='icon file'></i>
        <router-link
          class='ar-meta-categories'
          :to='item.type.path'
        >{{item.type.name}}</router-link>
        <span class='angle'> > </span>
        <i class='icon file'></i>
        <router-link
          :to='item.tags[0].path'
          class='ar-meta-categories'
        >{{item.tags[0].tag}}</router-link>
      </span>
      <span class='ar-meta tags'>
        <span class='ar-meta-separator'>｜</span>
        <span
          v-for='(tag,index) in item.tags'
          :key='tag.path'
        >
          <i class='icon links'></i>
          <router-link
            class='ar-meta-tags'
            :to='tag.path'
          >{{tag.tag}}</router-link>
          <span
            class='angle'
            v-show="item.tags.length!=index+1"
          > - </span>
        </span>
      </span>
      <div
        class='content'
        v-html='item.content[0]'
      >
      </div>
      <router-link
        class='more'
        :to="item.path"
      >Read more</router-link>
      <polo-hr />
    </article>
  </transition-group>
</template>

  <script>
export default {
  name: "index",

  data: function() {
    return {
      articles: null
    };
  },
  created() {
    this.$store.commit("togglePagebar");

    let that = this;

    this.$axios.get("./archives").then(function(e) {
      that.articles = e.data.docs;
      that.$store.commit("postPage", parseInt(e.data.docs[0].totalPage));
      that.$store.commit("toggleLoding");
    });
  },
  destroyed() {
    this.$store.commit("togglePagebar");
  }
};
</script>

<style lang='less' scoped>
.slide-in-enter-active {
  transition: all 0.3s ease;
}
.slide-in-enter {
  transform: translateX(20px);
  opacity: 0;
}
.ar-item {
  margin: 1.6rem 0 2rem;

  .ar-title {
    display: block;
    margin-bottom: 0.3rem;
    border-bottom: 1px solid #fcce77;
    font-size: 1.4rem;
    color: #ffb129;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      color: #70b991;
      border-bottom: 1px solid #70b991;
    }
  }

  .ar-date {
    color: #a7a4a4;
  }

  .ar-meta {
    color: #e9e3e3;

    a:hover {
      color: #70b991;
    }

    .ar-meta-separator {
      margin-left: 0.3rem;
    }

    i {
      margin: 0 0.2rem 0 0.3rem;
    }

    .file::before {
      content: "\e930";
    }

    .angle {
      font-size: 0.5rem;
    }

    .links::before {
      content: "\e936";
    }
  }

  .content {
    margin-top: 0.5rem;
  }

  .more {
    display: inline-block;
    padding: 0 0.6rem;
    height: 1.6rem;
    background: #fcce77;
    color: rgb(144, 184, 167);
    text-align: center;
    text-decoration: none;
    line-height: 1.6rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #4ccb70;
      color: #fcce77;
    }
  }
}
</style>

