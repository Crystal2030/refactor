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

  .main{
    flex: 1!important;;
  }
</style>
