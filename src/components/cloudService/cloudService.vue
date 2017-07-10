<template>
  <div class="main service cloud">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">ClOUD SERVICE</h3>
          <h2 class="content-title-ch">云服务</h2>
        </div>
        <p class="col-md-12 col-sm-12 col-xs-12 text-center">
          轻轻一点，乐在其中
        </p>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-lx-4" v-for="(service, index) in services">
          <div class="vira-card">
            <div class="vira-card-header">
              <div class="card-icon">
                <i class="iconfont icon-guidang" aria-hidden="true"></i>
              </div>
            </div>
            <div class="vira-card-content">
              <h3>{{service}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        services: ['自动化审核云服务', '数据库私有云', '公有云服务']
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
.cloud{
  background: #fff;
}
</style>
