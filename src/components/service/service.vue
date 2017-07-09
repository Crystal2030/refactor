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
        <div class="services-wrapper col-md-4" v-for="(service, index) in services">
          <div class="service-con">
            <ul>
              <li class="text-center"  v-for="info in service.infos">{{info}}</li>
            </ul>
          </div>
          <div class="service-name text-center"><i class="iconfont" :class="`icon-${service.icon}`"></i>{{service.name}}</div>
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
            icon: 'training',
            infos: ['MySQL全套解决方案', '基于Galera的MySQL Cluster解决方案', '基于Group Replication的MySQL解决方案', '基于Key-Value存储的解决方案', '产品维护服务', '性能优化服务']
          },
          {
            name: '大数据服务',
            icon: 'shujuku1',
            infos: ['数据库日志中心构建与分析预警', '数据库资源分析预警', '数据库巡检与预警']
          },
          {
            name: '数据库一体机',
            icon: 'dailimoren',
            infos: ['MySQL数据库一体机', 'DM数据库一体机', 'Key-Value数据库一体机']
          },
          {
            name: '极数学院',
            icon: 'Publicwelfare',
            infos: ['面向社会人员的MySQL相关培训', '面向企业的MySQL相关培训', '产品相关培训']
          },
          {
            name: '云服务',
            icon: 'ic_reliable',
            infos: ['自动化审核云服务', '数据库私有云', '公有云服务']
          },
          {
            name: '数据库一体机',
            icon: 'dailimoren',
            infos: ['MySQL数据库一体机', 'DM数据库一体机', 'Key-Value数据库一体机']
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
  padding-bottom: 40px;
  .iconfont{
    display: block;
    width: 60px;
    height: 60px;
    line-height: 54px;
    margin: 0 auto;
    border: 5px solid #fff;
    border-radius: 50%;
    background: #1dabdf;
    color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: -50%;
    font-size: 35px;
  }
  .services-wrapper{
    margin-bottom: 30px;
    padding-left: 55px;
    padding-right: 55px;
    .service-con{
      display: flex;
      background: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      transition: all 0.35s;
      overflow: hidden;
      padding-bottom: 1px;
      height: 185px;
      border: 1px solid #eee;
      border-bottom: 1px solid #1dabdf;
      justify-content: center;
      align-items: center;
      color: #232323;
      transition: color .35s;
      &:hover{
        background: #eee;
        color: #1dabdf;
        transition: color .35s;
      }
    ul{
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    }
    .service-name{
      position: relative;
      border: 1px solid #eee;
      border-top: none;
      background: #fff;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      height: 70px;
      line-height: 75px;
      color: #1dabdf;
      font-size: 15px;
      font-weight: bold;
      &:hover{
        background: #eee;
      }

      &:after{
         content: '';
         position: absolute;
         left: 0;
         bottom: 0;
         width: 0;
         border-bottom: 2px solid #1dabdf;
         transition: width .2s ease-in-out;
       }
    }
    &.active{
      .service-name{
        &:after{
           content: '';
           position: absolute;
           left: 30%;
           bottom: 0;
           width: 40%;
           border-bottom: 2px solid #1dabdf;
           transition: width .2s ease-in-out;
         }
      }
      .service-con{
        position: relative;
        padding: 35px;
        height: 100%;
        opacity: 1;
        transition: opacity 0.45s;
        width: 100%;
        left: 0;
        margin: 20px auto;
        right: 0;
        border-radius: 4px;
        background: #eee;
      }
    }
    &:nth-child(3n+1){
      clear: both;
     }
  }
}
</style>
