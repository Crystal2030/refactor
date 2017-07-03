<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h3>服务</h3>
          <ul>
            <li><a href="#/service">数据库服务</a></li>
            <li><a href="#/service">大数据服务</a></li>
            <li><a href="#/service">数据库一体机</a></li>
            <li><a href="#/service">培训服务</a></li>
            <li><a href="#/service">云服务</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>产品</h3>
          <ul>
            <li><a href="#/product">Estimate</a></li>
            <li><a href="#/product">MAMP</a></li>
            <li><a href="#/product">Daas</a></li>
            <li><a href="#/product">Proxy</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>培训</h3>
          <ul>
            <li><a href="#/training">数据库公共培训</a></li>
            <li><a href="#/training">企业内部培训</a></li>
            <li><a href="#/training">产品培训</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3>关于我们</h3>
          <ul>
            <li><a href="#/about">公司简介</a></li>
            <li><a href="#/about">联系我们</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="copyright">
            ©版权所有 2017 <a href="http://www.cloud-ark.com" target="_blank" title="极数云舟">北京极数云舟科技有限公司</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {},
    methods: {},
    components: {}
  };
</script>

<style lang="scss" rel="stylesheet/scss">
.footer {
  position: relative;
  bottom: 0;
  clear: both;
  background: #2c3037;
  h3{
    color: #d7d8d9;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
  }
  ul{
    li{
      a{
        color: #9b93a0;
        height: 18px;
        line-height: 18px;
      }
    }
  }
  .copyright{
    color: #73777a;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
    a{
      color: #73777a;
    }
  }
}

</style>
