<template>
  <div>
    <nav class="nav-bar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <!-- Logo -->
          <a class="navbar-brand" href="#/home">
            <img class="logo" id="logo" src="static/images/logo.png">
          </a>

        </div>

        <div id="nav-menu" class="navbar-collapse collapse" role="navigation">
          <ul class="nav navbar-nav blete-menu-wrapper">
            <li>
              <router-link to="/home">首页</router-link>
            </li>
            <li>
              <router-link to="/product">产品</router-link>
            </li>
            <li>
              <router-link to="/service">服务</router-link>
            </li>
            <li>
              <router-link to="/training">培训</router-link>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from './components/footer/footer.vue';
  export default {
    components: {
      'v-footer': footer
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .main{
    flex: 1!important;;
    margin-top: 50px!important;
  }
.nav-bar{
  .navbar-brand{
    padding: 8px 15px;
    .logo{
      width: 120px;
    }
  }
  .navbar-nav{
    height: 50px;
    overflow: hidden;
    li{
      a{
        position: relative;
        transition: color .2s ease-in-out;
        &:before{
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          border-bottom: 2px solid;
          transition: width .2s ease-in-out;
        }
        &:hover{
          color: #2aacdd;
          border-bottom: 2px solid #2aacdd;
          transition: color .2s ease-in-out;
        }
        &:hover:before{
          width: 100%;
        }
        &.active{
          color: #2aacdd;
          background: none;
          border-bottom: 2px solid #2aacdd;
        }
        &.active:before{
           width: 100%;
        }
      }
    }
  }
}


</style>
