<template>
  <article id='ar-template'>
    <div class='ar-content'>
      <template v-for="(ctx, index) in docs.content">
        <article-render
          :hnum="index"
          :content='ctx'
        ></article-render>
      </template>
    </div>
    <div
      class='ar-tags'
      v-for="tag in docs.tags"
      :key='tag.path'
    >
      <router-link :to='tag.path'>{{tag.tag}}</router-link>
    </div>
  </article>
</template>

<script>
import articleRender from "./article_render/article_render";

export default {
  name: "ar-template",

  components: {
    articleRender
  },

  data() {
    return {
      docs: {}
    };
  },
  created() {
    let that = this;
    this.$store.commit("initArticle");
    this.$store.commit("toggleBtn");
    this.$store.commit("toggleArticle");
    this.$axios
      .get("./article?title=" + this.$route.query.title + "")
      .then(function(e) {
        that.docs = e.data.docs;
        that.$store.commit("toggleLoading");
      });
  },
  destroyed() {
    this.$store.commit("toggleBtn");
    this.$store.commit("toggleArticle");
  }
};
</script>

<style>
.keyword {
  color: rgb(177, 121, 230);
}
.literal {
  color: rgb(197, 140, 33);
}
#ar-template {
  overflow: hidden;
}

#ar-template .ar-content {
  margin-bottom: 1rem;
}

#ar-template .ar-content a {
  color: aquamarine;
  cursor: pointer;
}

#ar-template .ar-content pre,
#ar-template .ar-content code {
  font-family: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace,
    Helvetica Neue For Number !important;
}

#ar-template .ar-content .highlight {
  position: relative;
  border-radius: 1px;
  z-index: 1111;
}

#ar-template .ar-content .highlight::after {
  position: absolute;
  top: 0;
  z-index: 0;
  min-width: 100%;
  height: 1.4rem;
  background: #1c2429;
  content: "";
}

#ar-template .ar-content .highlight,
#ar-template .ar-content pre {
  overflow: auto;
  margin: 1rem 0;
  padding: 0;
  padding-top: 1.4rem;
  background: #263238;
  color: #ffb129;
  font-size: 14px;
  line-height: 20px;
}

#ar-template .ar-content .highlight pre {
  margin: 0;
  padding: 8px 0;
  border: none;
}

.copy-notice {
  position: absolute;
  top: 4px;
  right: 0;
  z-index: 1;
  background: #1c2429;
  color: #89ddff;
  opacity: 0;
}

.clipboard {
  position: absolute;
  right: 10px;
  z-index: 1;
  margin-top: -1rem;
  color: #89ddff;
  cursor: pointer;
  transition: color 0.2s;
}

#ar-template .ar-content .clipboard::before {
  content: "\e926";
}

#ar-template .ar-content .highlight table {
  position: relative;
  margin: 0;
  width: auto;
  border: none;
}

#ar-template .ar-content .highlight table::before {
  position: absolute;
  z-index: 1;
  display: inline-block;
  margin-top: -1.4rem;
  padding: 0 0.7rem;
  width: 5rem;
  color: #eff;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.4rem;
  content: "js";
}

#ar-template .ar-content .highlight table::after {
  position: absolute;
  top: -1.4rem;
  z-index: 0;
  width: 100%;
  height: 1.4rem;
  background: #1c2429;
  content: "";
}

#ar-template .ar-content .highlight .column {
  padding: 0;
  border: none;
  vertical-align: top;
  font-size: 0;
}

#ar-template .ar-content .highlight .column pre {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background-color: #263238;
  color: rgb(134, 133, 76);
  text-align: right;
}

#ar-template .ar-content .highlight .column .line {
  height: 1rem;
}

#ar-template .ar-content .highlight .code pre {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  width: 100%;
  background-color: #263238;
}

#ar-template .ar-content ol,
#ar-template .ar-content ul {
  margin-top: 0.4rem;
  padding: 0 0 0 0.8rem;
  list-style: none;
  counter-reset: li;
}

#ar-template .ar-content li {
  position: relative;
  margin: 0.2rem 0;
  padding: 0.1rem 0.5rem 0.1rem 1.5rem;
  color: aliceblue;
}

#ar-template .ar-content ol > li::before {
  margin-top: 0.2rem;
  width: 1.2rem;
  height: 1.2rem;
  border-bottom: 2px solid #fff;
  border-radius: 0.2rem;
  content: counter(li);
  counter-increment: li;
  text-align: center;
  font-size: 0.6rem;
  line-height: 1.2rem;
}

#ar-template .ar-content ul li::before,
#ar-template .ar-content ol li::before {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #4ccb70;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#ar-template .ar-content ul li:hover:before,
#ar-template .ar-content ol li:hover:before {
  color: #ffb129;
  top: 1px;
  border-bottom: none;
}

#ar-template .ar-tags {
  margin-bottom: 0.5rem;
}

#ar-template .ar-tags a {
  margin-right: 0.4rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid #4ccb70;
  border-radius: 0.4rem;
  background: #fff;
  color: #4ccb70;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

#ar-template .ar-tags a:hover {
  color: #fff;
  background-color: #89ddff;
}
</style>