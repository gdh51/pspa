<template>
  <hr/>
</template>

<script>

// 分割线
export default {
  name: 'polo-hr'
}
</script>


<style lang="less" scoped>
hr {
  position: relative;
  box-sizing: content-box;
  z-index: 0;
  margin: 1rem 0;
  width: calc(100% - .25rem);
  border: 2px dashed #70B991;
  background-color: #FCCE77;
  overflow: visible;
}

hr:hover::before {
  transform: rotate(360deg);
  left: calc(95% - 20px);
}

hr::before {
  position: absolute;
  z-index: 1;
  left: 5%;
  top: -17px;
  content: '';
  width: 30px;
  height: 30px;
  background: url('../../../assets/img/polo.gif');
  background-size: cover;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
</style>

