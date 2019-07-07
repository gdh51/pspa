<template>
  <article id='aboutMe'>
    <h1>About me</h1>
    <div class='ar-context'>
      <p>本科生在读，很早就想学前端，结果一直拖到了18年2月。期间想加入工作室但是当时条件不足</p>
      <p>不敢说擅长什么方面，但是一直在不断的学习，寻求新的知识。</p>
      <p>学习&项目经历：</p>
      <h3>2018</h3>
      <ul>
        <li>
          <strong>2018.02</strong>开始学习css+html
        </li>
        <li>
          <strong>2018.03</strong>购入<a>Javascript DOM编程艺术</a>自学，初步了解DOM
        </li>
        <li>
          <strong>2018.05~2018.06</strong>视频教学学习Jquery与Bootstrap
        </li>
        <li>
          <strong>2018.07</strong>Jquery实现电商整套系统前端+后台数据管理
        </li>
        <li>
          <strong>2018.08</strong>借书<a>Javascript高级程序设计</a>学习，懵懂
        </li>
        <li>
          <strong>2018.10</strong>查阅文档完整学习Jquery
        </li>
        <li>
          <strong>2018.11</strong>学习git指令与Sass预处理
        </li>
        <li>
          <strong>2018.12</strong>学习node.js与vue框架
        </li>
      </ul>
      <h3>2019</h3>
      <ul>
        <li>
          <strong>2019.01</strong>借入<a>Javascript权威指南</a>与<a>Javascript设计模式</a>学习
        </li>
        <li>
          <strong>2019.03</strong>学习<a>Node.js实战</a>与Express框架+MongoDB数据库
        </li>
      </ul>
      <p>...keep moving</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "aboutMe",
  created() {
    this.$store.commit("togglePagebar");
    this.$store.commit("toggleLoding");
  },
  destroyed() {
    this.$store.commit("togglePagebar");
  }
};
</script>

<style lang='less' scoped>
h1 {
  font-size: 1.3rem;
}

.ar-context ul li {
  strong {
    color: #fcce77;
    font-weight: bold;
    padding-right: 0.2rem;
  }

  a {
    color: aquamarine;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #4ccb70;
    }
  }
}
</style>


