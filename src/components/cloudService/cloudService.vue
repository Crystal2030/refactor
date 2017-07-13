<template>
  <div class="main service cloud">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">ClOUD SERVICE</h3>
          <h2 class="content-title-ch">云服务</h2>
        </div>
        <p class="col-md-12 col-sm-12 col-xs-12 text-center section-dec">
          轻轻一点，乐在其中
        </p>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-4" v-for="(service, index) in services">
          <div class="vira-card">
            <div class="vira-card-header">
              <div class="card-icon">
                <i class="iconfont" :class="`icon-${service.icon}`" aria-hidden="true"></i>
              </div>
            </div>
            <div class="vira-card-content">
              <h3>{{service.name}}</h3>
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
        services: [
          {name: '自动化审核云服务', icon: 'dashujuyuyunjisuanyingyong'},
          {name: '数据库私有云', icon: 'siyouyun'},
          {name: '公有云服务', icon: 'gongyouyun'}
        ]
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
.cloud{
  background: #fff;
  .iconfont{
    font-size: .5rem!important;
  }
  .icon-gongyouyun{
    font-size: .6rem!important;
  }
}
</style>
