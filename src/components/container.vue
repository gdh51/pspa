<template>
  <div id='container'>
    <section class='layout'>
      <transition name='slide' mode='out-in'>
        <router-view></router-view>
      </transition>
    </section>
    <page-manage v-show="this.$store.state.isShowPagebar"></page-manage>
  </div>
</template>

<script>
import pageManage from './childrens/page_manage.vue';
export default {
  name:'container',
  components:{
    pageManage
  },
}
</script>

<style lang='less'>
.slide-enter-active,.slide-leave-active{
  transition: all .3s ease;
}

.slide-enter,.slide-leave-to{
  opacity: 0;
  transform: translateX(10px);
}

#container {
  flex:1 auto;

  .layout {
    margin:0 auto;
    width:700px;

    h1::before,
    h2::before,
    h3::before,
    h4::before,
    h5::before,
    h6::before {
      font-family: 'icomoon';
      margin-right: .1rem;
      font-size: 1rem;
      color:#FFB129;
      content:'\e9cb';
      transition: all .2s ease;
    }

    h1:hover::before,
    h2:hover::before,
    h3:hover::before,
    h4:hover::before,
    h5:hover::before,
    h6:hover::before {
      margin-right: .3rem;
      cursor:pointer;
    }

  }

  p {
    display: block;
    color:#eee7da;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  ul {
    margin-top: .4rem;
    padding: 0 0 0 .8rem;
    list-style: none;
    counter-reset: li;

    li {
      position: relative;
      color:aliceblue;
      margin: .2rem 0;
      padding: .1rem .5rem .1rem 1.5rem;

      &::before{
        position: absolute;
        left:0;
        top: 10px;
        margin-left: .45rem;
        width: .3rem;
        height: .3rem;
        border: .15rem solid #53787d;
        border-radius: .3rem;
        background: #fff;
        content: "";
        line-height: .3rem;
        cursor:pointer;
        transition: all .3s ease;
      }

      &:hover::before{
        border: .15rem solid #FCCE77;
      }
    }

    ul {
      padding-left: .5rem;
    }
  }
}

@media screen and (max-width: 768px){
  #container .layout {
    margin: 0 30px;
    width: auto;
  }
}

.archives-sort-title {
  position: relative;
  color:#70B991;
  padding-bottom: 1.2rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  line-height: 1;

  &::before {
    position: absolute;
    top: .1rem;
    left: calc(-.5rem + 1px);
    z-index: 1;
    width: .5rem;
    height: .5rem;
    border: .25rem solid #70a8af;
    border-radius: .5rem;
    background-color: #fff;
    content: "";
    line-height: .5rem;
    transition: all .2s ease-in-out;
  }

  &:hover::before{
    border: .25rem solid #FCCE77;
    cursor: pointer;
  }

  &::after{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: .1rem;
    height: 1.3rem;
    background: #53787d;
    content: "";
  }
}

.archives-sort{
  padding-left: 1rem;
  border-left: 2px solid #53787d;

  .archives-sort-items{
    position: relative;
    margin-bottom: 1rem;
    transition: all .2s ease-in-out;

    &::before{
      position: absolute;
      top: .5rem;
      left: calc(-1rem - 7px);
      width: .3rem;
      height: .3rem;
      border: .15rem solid #70a8af;
      border-radius: .3rem;
      background: #fff;
      content: "";
      line-height: .3rem;
      transition: all .2s ease-in-out;
    }

    &:hover::before {
      cursor: pointer;
      border-color:#FCCE77;
    }

    &.year {
      color:#70B991;
      font-size: 0.8rem;

      &:hover::before {
        border-color:#70a8af;
      }

      &::before{
        top:.5rem;
        border-color: #FCCE77;
      }
    }
  }

  .archives-sort-item_time{
    position: absolute;
    top: .1rem;
    color: #99a9bf;
  }

  .archives-sort-item_title{
    display: block;
    margin-left: 5rem;
    color: aquamarine;
    text-decoration: none;
    font-size: .8rem;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      color:#FFB129;
    }
  }
}
</style>

