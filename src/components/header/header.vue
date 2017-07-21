<template>
    <nav class="navbar navbar-default navbar-fixed-top" id="page-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand page-scroll" href="#/home"><img
            src="static/images/logo-white.png" alt="ark logo"></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="hidden">
              <a href="/home"></a>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#home'}" to="/home">首页</router-link>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#products'}" to="/home">产品</router-link>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#solution'}" to="/home">解决方案</router-link>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#largeData'}" to="/home">大数据服务</router-link>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#machine'}" to="/home">数据库一体机</router-link>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#cloudService'}" to="/home">云服务</router-link>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#school'}" to="/home">极数学院</router-link>
            </li>
            <li>
              <router-link v-scroll-to="{el: '#about'}" to="/home">关于我们</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
</template>

<script>
  import Vue from 'vue';
  import VueScrollTo from 'vue-scrollto';
  Vue.use(VueScrollTo);
  export default {
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  #page-top {
    padding: 5px;
    background-color: transparent;
    border-color: transparent;
    &.navbar-shrink {
      box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
      background-color: #fff;
      .navbar-toggle{
        background-color: #1dabdf;
        .icon-bar{
          background: #fff;
        }
      }
      .navbar-nav{
        a{
          color: #222;
        }
      }
      .navbar-collapse{
        &.in{
          a{
            color: #fff;
          }
        }
      }
    }
    .navbar-brand{
      img{
        padding-top: 8px;
        width: 140px;
      }
    }
    .navbar-collapse{
      li{
        a{
          font-family: "Roboto",sans-serif;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          letter-spacing: 1px;
          position: relative;
          transition: color .2s ease-in-out;
          color: #fff;
          height: .5rem;
          line-height: .3rem;
          cursor: pointer;
          &:active{
            color: red;
          }
          &:before{
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            border-bottom: 2px solid;
            transition: width .2s ease-in-out;
          }
          &:hover,&:focus{
            outline: 0;
            color: #2aacdd;
            transition: color .2s ease-in-out;
          }
          &:hover:before{
            width: 100%;
          }
        }
      }
    }
    [aria-expanded="true"] {
      background: rgba(0,0,0,.8);
    }
    .navbar-toggle{
      background: #fff;
      border-color: #1dabdf;
      .icon-bar{
        background: #1dabdf;
      }
      &:hover,&:focus{
        background: #1dabdf;
        border-color: #1dabdf;
        .icon-bar{
          background: #fff;
        }
      }
    }
    .navbar-brand {
      padding: 0px;
      height: 60px;
    }
  }
  @media (min-width:768px) {
    .navbar-default
    {
      background-color: transparent;
      padding: 25px 0;
      -webkit-transition:padding .3s;
      -moz-transition:padding .3s;
      transition:padding .3s;
      border:0;
      .navbar-nav{
        .active{
          a{
            border-radius: 3px

          }
        }
      }
      &.navbar-shrink {
        padding: 0;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
        background-color: #fff;
        .navbar-toggle{
          background-color: #222;
        }
        .navbar-nav{
          a{
            color: #222;
          }
        }
      }
    }
  }
</style>
