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
      <!--<div class="row">
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
          {name: '自动化审核云服务', icon: 'dashujuyuyunjisuanyingyong'},
          {name: '数据库私有云', icon: 'siyouyun'},
          {name: '公有云服务', icon: 'chanyeyunyingyongfuwu'}
        ]
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
.cloud{
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
          font-size: 58px;
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
