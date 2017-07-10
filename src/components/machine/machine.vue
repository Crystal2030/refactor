<template>
  <div class="main service machine">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">DB MACHINE</h3>
          <h2 class="content-title-ch">数据库一体机</h2>
        </div>
        <p class="col-md-12 col-sm-12 col-xs-12 text-center">
          你想要的，我们都已经为你准备好了
        </p>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-lx-4" v-for="(service, index) in services">
          <div class="vira-card">
            <div class="vira-card-header">
              <div class="card-icon">
                <i class="iconfont icon-dashuju" aria-hidden="true"></i>
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
        services: ['MySQL数据库一体机', 'DM数据库一体机', 'Key-Value数据库一体机']
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
