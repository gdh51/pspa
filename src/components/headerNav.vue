<template>
  <header id='header-nav' @click.stop='showMenu'>
    <nav class='nav-bar' ref='nav'>
      <span class='nav-left'>
        <router-link class='blog-name' to='/'>Lazybones</router-link>
      </span>
      <i class='phone-menu nav-right icon' @click.stop='showMenu'>
      </i>
        <span class='nav-right pc-menu' ref='menu'>
          <a class='nav-page'>
            <i class='icon search'></i>
            <span> Search</span>
          </a>
          <router-link to="/about?currentPage=1" class='nav-page'>About</router-link>
          <router-link to="/archives?currentPage=1" class='nav-page'>Archives</router-link>
          <router-link to="/tags" class='nav-page'>Tags</router-link>
          <router-link to="/categories?currentPage=1" class='nav-page'>Catagories</router-link>
        </span>
    </nav>
    <address class='nav-info'>
      <span class='nav-name nav-title'>{{title}}</span>
      <span class='nav-motto nav-title' v-if="title=='Lazybones'">I Miss You</span>
      <span class='nav-other-links'>
        <a href="https://github.com/gdh51" class='links-icon'><i class='icon github'></i></a>
        <a href="" class='links-icon'><i class='icon weibo'></i></a>
        <a href="" class='links-icon'><i class='icon twitter'></i></a>
        <a href="" class='links-icon'><i class='icon steam'></i></a>
        <a href="" class='links-icon'><i class='icon qq'></i></a>
        <a href="" class='links-icon'><i class='icon search'></i></a>
      </span>
    </address>
  </header>
</template>

<script>
export default {
  name:'header-nav',
  data:function(){
    return {
      isShowMenu:false,
      title:'Lazybones'
    }
  },
  watch: {
    '$route'(to,from){
      if(to.path=='/article'){
        this.title=to.query.title;
      }else{
        this.title='Laybones';
      }
    }
  },
  methods: {
    showMenu:function(e){
      var el=this.$refs.menu;
      if(window.innerWidth>'768'){//不为小窗口时不执行
        this.isShowMenu=true;
        el.style.display="block";
        return;
      }
      if(e.currentTarget.tagName=='I'){
        this.isShowMenu=!this.isShowMenu;
      }else{
        this.isShowMenu=false;
      }

      if(this.isShowMenu==true){
      //display:none特殊情况
      //添加类要实现动画，必须添加setTime
      el.style.display="block";
      setTimeout(() => {
        el.style.opacity=1;
        el.classList.toggle('slide-down');
      }, 0);

    }else{
      //去掉类时要先留过渡时间执行完动画
      el.classList.toggle('slide-down');
      el.style.opacity=this.isShowMenu?1:0;
      setTimeout(() => {
        el.style.display="none";
      }, 300);
    }

  }
      }
}
</script>

<style scoped>
#header-nav{
  position:relative;
  margin-bottom: 1rem;
  background-image: url("../assets/img/bcimg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: #53787D;
}

#header-nav .nav-bar{
  position: absolute;
  z-index:2111;
  top:0;
  padding: 10px 36px;
  width: 100%;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
}

#header-nav .nav-bar .nav-left{
  float:left;
}

#header-nav .nav-bar .nav-left .blog-name{
  font-weight: 700;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  color:#FCCE77;
}

#header-nav .nav-bar .nav-right{
  float:right;
}

#header-nav .nav-bar .phone-menu{
  display: none;
  padding-top: 0.5rem;
  color:#FCCE77;
}

#header-nav .phone-menu::after{
  content:"\ea7a";
}

#header-nav .nav-bar .pc-menu .nav-page{
  position: relative;
  margin-left: 0.6rem;
  padding-bottom: 0.3rem;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,.3);
  color:#FFB129;
  font-size: 0.7rem;
  cursor: pointer;
}

#header-nav .nav-bar .pc-menu .nav-page:hover{
  color:#FEDE4B;
}

#header-nav .nav-bar .pc-menu .nav-page:hover::after{
  width:100%;
}

#header-nav .nav-bar .pc-menu .nav-page::after{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 0;
  height: 3px;
  background-color: #FFB129;
  content: "";
  transition: all 0.3s linear;
}

#header-nav .search:before{
  content: '\e986';
}

#header-nav .nav-info{
  padding:10rem 1rem;
}

#header-nav .nav-info .nav-title{
  display: block;
  text-align: center;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,.15);
  color:#FEDE4B;
  line-height: 1.5;
}

#header-nav .nav-info .nav-name{
  font-size: 2rem;
  font-weight: 700;
}

#header-nav .nav-info .nav-motto{
  font-size: 1.2rem;
  opacity: 0.7;
}

@media screen and (max-width:768px) {
  #header-nav .nav-bar .phone-menu{
    display: block;
  }
  #header-nav .nav-bar .pc-menu{
    position: absolute;
    display: none;
    top: 3rem;
    right: 0.8rem;
    width: 8rem;
    background: rgba(255,255,255,.9);
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.27);
    transform: translateY(-20px);
    box-shadow: 0 0 4px rgba(0,0,0,.27);
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  #header-nav .nav-bar .pc-menu .nav-page{
    display: block;
    margin-left: 0;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 0.6rem;
    color: #FFB129;
    text-shadow: none;
    font-size: 0.8rem;
  }
  #header-nav .nav-info .nav-name{
   font-size: 1.3rem;
   font-weight: 700;
  }
  #header-nav .nav-info .nav-motto{
   font-size: 0.8rem;
   opacity: 0.7;
  }
}

#header-nav .nav-bar .pc-menu.slide-down{
  transform: translateY(0);
  opacity: 1;
}

#header-nav .nav-info .nav-other-links{
  display: block;
  margin: 0 auto;
  width: 15rem;
  text-align: center;
}

#header-nav .nav-info .nav-other-links .links-icon{
  margin: 0 .5rem;
  color:#FEDE4B;
  opacity: 0.8;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,.15);
  font-size: 1.4rem;
  cursor: pointer;
}

#header-nav .nav-info .nav-other-links .links-icon:hover{
  opacity: 1;
}

#header-nav .github::after{
  content: '\eab0';
}

#header-nav .weibo::after{
  content: '\ea9a';
}

#header-nav .twitter::after{
  content: '\ea96';
}

#header-nav .steam::after{
  content: '\eaad';
}

#header-nav .qq::after{
  content: '\f1d6';
}

</style>


