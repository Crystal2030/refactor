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
<!--      <div class="row">
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
      </div>-->

      <div class="row services" v-cloak>
        <div class="col-md-4  col-sm-4 col-xs-4 text-center service" v-for="(service, index) in services">
          <a>
            <i class="iconfont" :class="`icon-${service.icon}`"></i>
            <div class="service-name">{{service.name}}</div>
          </a>
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
          {name: '数据库日志中心构建与分析预警', icon: 'nav-log-center'},
          {name: '数据库资源分析预警', icon: 'ziyuan1'},
          {name: '数据库巡检与预警', icon: 'shujuchaxun'}
        ]
      };
    }
  };
</script>

<style lang="scss" scoped rel="stylesheet/scss">
#largeData{
  background: #fff;
  .services {
    .service {
      margin-bottom: 15px;
      background: rgba(234, 233, 233,.2);
      padding: 40px 0 50px 0;
      border-right: 15px solid #fff;
      a{
        transition: display .35s;
        color: #232323;
        .iconfont {
          display: block;
          font-size: 50px;
          margin-bottom: .1rem;
          color: #232323;
        }
        &:hover {
          color: #2aacdd;
          text-decoration: none;
          .iconfont{
            color: #2aacdd;
          }
        }
        .service-name{
          font-size: 15px;
        }
      }
    }
  }
}
</style>
