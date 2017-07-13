<template>
  <div class="main service largeData">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">BIG DATA</h3>
          <h2 class="content-title-ch">大数据服务</h2>
        </div>
        <p class="col-md-12 col-sm-12 col-xs-12 text-center section-dec">
          这里其实是一座金矿，我来为你提炼
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
      <!--<ul class="row services-wrapper">
        <li class="text-center col-md-4" v-for="(service, index) in services">{{service}}</li>
        &lt;!&ndash;<div class="service-name text-center"><i class="iconfont" :class="`icon-${service.icon}`"></i>{{service.name}}</div>&ndash;&gt;
      </ul>-->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        services: [
          {name: '数据库日志中心构建与分析预警', icon: 'nav-log-center'},
          {name: '数据库资源分析预警', icon: 'ziyuan1'},
          {name: '数据库巡检与预警', icon: 'shujuchaxun'}
        ]
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
.largeData{
  background: #fff;
}
</style>
