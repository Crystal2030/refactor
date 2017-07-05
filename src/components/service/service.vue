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
        <div class="col-md-4" v-for="service in services">
          <div class="service-name">{{service.name}}</div>
          <i class="icon-training1"></i>
          <div class="service-con">
            <ul>
              <li class="col-md-4" v-for="info in service.infos">{{info}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    components: {
      box
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">


</style>
