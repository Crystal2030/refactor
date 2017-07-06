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
          <a class="navbar-brand page-scroll" href="/#page-top"><img
            src="static/images/logo-white.png" alt="ark logo"></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right" >
            <li class="hidden">
              <a href="/#page-top"></a>
            </li>
            <li>
              <a class="page-scroll">首页</a>
            </li>
            <li>
              <a class="page-scroll" >产品</a>
            </li>
            <li>
              <a class="page-scroll" >服务</a>
            </li>
            <li>
              <a class="page-scroll" >培训</a>
            </li>
            <li>
              <a class="page-scroll" >关于我们</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
</template>

<script>
  export default {
    methods: {
      jump (index) {
        let jump = document.querySelectorAll('.page-scroll');
        // 获取需要滚动的距离
        let total = jump[index].offsetTop;
        // Chrome
        document.body.scrollTop = total;
        // Firefox
        document.documentElement.scrollTop = total;
        // Safari
        window.pageYOffset = total;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .navbar-default {
    background-color: #222;
    border-color: transparent;
    .navbar-collapse {
      border-color: rgba(255,255,255,.02)
    }
    .navbar-toggle{
      .icon-bar{
        background: #fff;
      }
      &:hover,&:focus{
        background: #007aff;
      }
    }
    .navbar-brand {
      padding: 0px;
    }
    .nav{
      li{
        a{
          font-family: "Roboto",sans-serif;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 1px;
          position: relative;
          transition: color .2s ease-in-out;
          color:#fff;
          cursor: pointer;
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
      .navbar-brand {
        font-size: 2em;
        -webkit-transition:all .3s;
        -moz-transition:all .3s;
        transition:all .3s
      }
      &.navbar-shrink {
        background-color: #fff;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
        padding: 10px 0;
        .navbar-nav{
          a{
            color: #222;
          }
        }
      }
    }
  }
  .main{
    flex: 1!important;;
  }
</style>
