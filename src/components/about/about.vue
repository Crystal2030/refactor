<template>
  <div class="main about">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">ABOUT</h3>
          <h2 class="content-title-ch">关于我们</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2>公司简介</h2>
          <p>
            北京极数云舟科技有限公司创建与2017年，创始团队由去一系列数据库相关专家组成，凭借在数据库方面多年的运维经验与内核源码研究经验，提供了一系列解决方案和产品，为客户提供专业的数据库维护、产品和相关服务。
          </p>
          <p>
            极数云舟拥有国内一系列专家，技术领域涉及MySQL、Redis、Hbase等数据库平台架构，为用户提供全套平台解决方案。主要产品包括：Estimate(MySQL
            审核)、MAMP(DB管理平台)、Daas(数据即服务)、DB-Proxy
          </p>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6">
          <h2>联系我们</h2>
          <div class="row">
            <div class="col-md-6"><i class="iconfont icon-dianhua1"></i> 185-0103-6362</div>
            <div class="col-md-6"><i class="iconfont icon-youxiang1"></i> marketing@cloud-ark.com</div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="form-group">
                <input class="form-control" type="text" placeholder="您的姓名:">
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="form-group">
                <input class="form-control" type="email" placeholder="您的邮箱:">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="form-group">
                <textarea class="form-control" name="message" ></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
              <button type="submit" class="btn send">发送</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
.about{
  background: #fff;
  padding-bottom: .6rem;
  h2{
    font-size: 24px;
    font-weight: 600;
  }
  .send{
    background: #1dabdf;
    width:1.35rem;
    height: .35rem;
    line-height: .17rem;
    color: #fff;
    font-size: .14rem;
  }
  .iconfont{
    font-size: 18px;
    color: #1dabdf;
  }
}


</style>
