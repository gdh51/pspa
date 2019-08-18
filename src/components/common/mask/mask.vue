<template>
  <div
    class='box'
    v-show='this.$store.state.isLoading'
  >
    <div class='loading'>
      <div class='rect1'></div>
      <div class='rect2'></div>
      <div class='rect3'></div>
      <div class='rect4'></div>
      <div class='rect5'></div>
    </div>
  </div>
</template>

<script>
// 加载时的全局遮布
export default {
  name: "loadingMask"
};
</script>

<style lang='less' scoped>
@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}

.box {
  position: fixed;
  display: table;
  z-index: 9999;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.loading {
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, 0.7);

  div {
    background-color: #67cf22;
    height: 60px;
    width: 6px;
    margin: 0 2px;
    display: inline-block;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
}
</style>


