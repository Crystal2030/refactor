<template>
  <div class="main service machine">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">DB MACHINE</h3>
          <h2 class="content-title-ch">数据库一体机</h2>
        </div>
        <p class="col-md-12 col-sm-12 col-xs-12 text-center section-dec">
          你想要的，我们都已经为你准备好了
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
          {name: 'MySQL数据库一体机', icon: 'mysql'},
          {name: 'DM数据库一体机', icon: 'yitiji'},
          {name: 'Key-Value数据库一体机', icon: 'shujuku1'}
        ]
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
