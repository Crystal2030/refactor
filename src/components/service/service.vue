<template>
  <div class="main service">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">SERVICE</h3>
          <h2 class="content-title-ch">服务</h2>
        </div>
      </div>
      <div class="row">
        <div class="services-wrapper col-md-4 active" v-for="(service, index) in services" >
          <div class="service-name text-center">{{service.name}}<i class="iconfont icon-training"></i></div>
          <div class="service-con">
            <ul>
              <li class="text-center" :class="`col-md-${12/service.infos.length}`" v-for="info in service.infos">{{info}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from '../../../lib/jquery-1.11.3.min.js';
  import box from '../box/box.vue';
  export default {
    data() {
      return {
        services: [
          {
            name: '数据库服务',
            infos: ['基于Galera集群+中间层', '基于Group Replication+中间层']
          },
          {
            name: '大数据服务',
            infos: ['数据库服务代维', '数据库服务代维', '性能优化']
          },
          {
            name: '数据库一体机',
            infos: ['数据库、机器日志分析', '数据汇总、预警', '监控巡检报表', '构建信息中心']
          }
        ]
      };
    },
    methods: {
      addActive(event) {
        $(event.target).addClass('active').siblings().removeClass('active');
      }
    },
    components: {
      box
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
.service{
  background: #fcfcfc;
  padding-bottom: 60px;
  .iconfont{
    display: block;
  }
  .service-con{
    opacity: 0;
    transition: display 0.35s;
    overflow: hidden;
    ul{
      overflow: hidden;
      margin: 0;
    }
  }
  .services-wrapper{
    &:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      border-bottom: 2px solid #1dabdf;
      transition: width .2s ease-in-out;
    }
    &.active{
      &:after{
        content: '';
        position: absolute;
        left: 30%;
        bottom: 0;
        width: 40%;
        border-bottom: 2px solid #1dabdf;
        transition: width .2s ease-in-out;
      }
      .service-con{
        position: absolute;
        padding: 35px;
        opacity: 1;
        transition: opacity 0.45s;
        width: 895px;
        left: 50%;
        margin: 20px auto;
        right: 0;
        border-radius: 4px;
        background: #eee;
      }
    }
  }
}
</style>
