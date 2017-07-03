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
          <ul class="nav navbar-nav navbar-right">
            <li class="hidden">
              <a href="/#page-top"></a>
            </li>
            <li>
              <a class="page-scroll">首页</a>
            </li>
            <li>
              <a class="page-scroll">产品</a>
            </li>
            <li>
              <a class="page-scroll">服务</a>
            </li>
            <li>
              <a class="page-scroll">培训</a>
            </li>
            <li>
              <a class="page-scroll">关于我们</a>
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

  };
</script>

<style lang="scss" rel="stylesheet/scss">


  .navbar-default {
    background-color: #222;
    border-color: transparent
  }
  .navbar-default .navbar-brand {
    color: #fff;
    font-family: "Montserrat",sans-serif;
    padding: 0px;
  }
  .navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:active,.navbar-default .navbar-brand.active {
    color: #fec503
  }
  .navbar-default .navbar-collapse {
    border-color: rgba(255,255,255,.02)
  }
  .navbar-default .navbar-toggle {
    background-color: #fed136;
    border-color: #fed136
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff
  }
  .navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus {
    background-color: #fed136
  }
  .navbar-default .nav li a {
    font-family: "Roboto",sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    color:#fff
  }
  .navbar-default .nav li a:hover,.navbar-default .nav li a:focus {
    color: #fed136;
    outline: 0
  }

  .navbar-default .navbar-nav>.active>a {
    border-radius: 0;
    color: #fff;
    background-color: #fed136
  }
  .navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus {
    color: #fff;
    background-color: #fec503
  }

  @media (min-width:768px) {
    .navbar-default
    {
      background-color: transparent;
      padding: 25px 0;
      -webkit-transition:padding .3s;
      -moz-transition:padding .3s;
      transition:padding .3s;
      border:0
    }
    .navbar-default .navbar-brand {
      font-size: 2em;
      -webkit-transition:all .3s;
      -moz-transition:all .3s;
      transition:all .3s
    }
    .navbar-default .navbar-nav>.active>a {
      border-radius: 3px
    }
    .navbar-default.navbar-shrink {
      background-color: #222;
      padding: 10px 0
    }
    .navbar-default.navbar-shrink .navbar-brand {
      font-size: 1.5em
    }
  }
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
