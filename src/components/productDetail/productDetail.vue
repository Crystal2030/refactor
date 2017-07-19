<template>
  <div class="product-detail">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-4 mask slideleft" v-for="detail in product.details">
          <img src="static/images/box1.png" alt="" class="background"/>
          <div class="bg"></div>
          <div class="content">
            <div class="item-img-panel">
              <i :class="`icon-${detail.icon}`"></i>
            </div>
            <h3 class="item-title">{{detail.title}}</h3>
            <h4 class="item-subtitle"></h4>
            <ul class="item-desc">
              <li>{{detail.desc}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import box from '@/components/box/box.vue';
export default {
  data() {
    return {
      products: [
        {
          name: '自动化审核平台',
          desc: '自动化审核平台',
          icon: 'shenhe3',
          details: [
            {title: '高效运维', desc: '自动化审核，运维不再痛苦，弹指之间，轻松搞定', icon: 'agreement'},
            {title: '全程代劳', desc: '审核、执行、回滚、统计以及更多额外的贴心功能，更安全，更简单，更高效', icon: 'agreement'},
            {title: '一键式回滚', desc: '最是那一回车的心痛，不胜后悔药的难寻。同样还是回车，轻轻松松回滚，老板再也不担心你错删数据了', icon: 'agreement'},
            {title: '审核精准', desc: '众里寻它千百度，自动审核就在MySQL源码处，利用MySQL原生的词法语法等审核原理来审核您的SQL，还有更精准的吗？', icon: 'agreement'},
            {title: '高度定制化', desc: '部门多？人员多？角色多？没关系！丰富的配置，自由的流程设置，完美实现您的需求', icon: 'agreement'},
            {title: '可视化增强', desc: '全程图形化展示，所有操作一览无余，轻松把握任务状态，一切尽在掌握', icon: 'agreement'}
          ]
        },
        {
          name: 'MySQL实时异构同步平台',
          desc: 'MySQL实时异构同步平台',
          icon: 'agreement',
          details: [
            {title: '异构存储', desc: '一款强大到可以将MySQL数据异构存储到您想要的数据库中的系统，您可以随心的订阅MySQL产生的任何增量数据', icon: 'agreement'},
            {title: '全程代劳', desc: '不仅支持异构，还能做到高并发、无延迟的实时同步，让您可以轻松误悦地实现即时搜索及数据分析的功能', icon: 'agreement'},
            {title: '多方案选择', desc: '此系统支持想要订阅功能的Kafka，也支持强大的分析型存储HBase，更支持您所熟悉的全文索引数据库ES，应有尽有，是您想要的吗？', icon: 'agreement'},
            {title: '精准过滤', desc: '此系统支持白名单、黑名单的定制，精准过滤，给您所想，祛您所厌', icon: 'agreement'},
            {title: '不多不少刚刚好', desc: '即使数据库挂掉，即使服务器宕机，仍保证数据无损，不多也不少，刚刚好', icon: 'agreement'},
            {title: '自动化高可用', desc: '构建高可用架构，三重防护，保您无忧', icon: 'agreement'}
          ]
        },
        {
          name: '自动化备份平台',
          desc: '自动化备份平台',
          icon: 'beifentongxunlu',
          details: [
            {title: '自定义策略', desc: '自定义轻重缓急，指定不同备份频率，既可以做到数据安全保证，又可以减少存储空间的浪费。', icon: 'agreement'},
            {title: '自动化调度', desc: '界面操作简单，只需轻轻一点，在您预订的那个时间里，备份就自动完成了，让您永无后顾之忧', icon: 'agreement'},
            {title: '阶梯存储', desc: '让最有可能需要的备份集，与您保持零距离，在需要的时候，快速提供给您，减少不必要的等待时间。超过一定时间的备份集，将做压缩存储，减少空间浪费。', icon: 'agreement'},
            {title: '集中管理', desc: '备份的所有情况在平台上都一览无余，操作简单，轻松便捷', icon: 'agreement'},
            {title: '备份集校验', desc: '解决了最后一丝不安全的可能性，备份下来的数据，必须有效', icon: 'agreement'},
            {title: '扩展性', desc: '业务增长太快？数据量突增？备份平台快速方便的扩展性，时刻为您保驾护航。', icon: 'agreement'}
          ]
        },
        {
          name: '自动化归档平台',
          desc: '自动化归档平台',
          icon: 'crm26',
          details: [
          ]
        },
        {
          name: '智能监控平台',
          desc: '智能监控平台',
          icon: 'jiankong2',
          details: [
            {title: '实时准确', desc: '通过强大的Agent，记录所有您想要的数据，轻轻一点，您想看到的就会展现在您眼前 ', icon: 'agreement'},
            {title: '多维度展示', desc: '不只可以查看常规指标变化，还可以为您展示最需要关注的指标，让您洞察秋毫，应用自如。', icon: 'agreement'},
            {title: '智能化', desc: '监控平台结合大数据分析，华丽转身，变被动为主动，为你预测未来，让所有变化都不出您所料。', icon: 'agreement'}
          ]
        },
        {
          name: '自动化运维管理平台',
          desc: '自动化运维管理平台',
          icon: 'dashujujiaoyi',
          details: [
            {title: '全方位管理', desc: '运维过程中，您所关注的信息都在这里，应有尽有，界面友好，人性化展示', icon: 'agreement'},
            {title: '全自动化', desc: '随时更新，时刻在线，无需任何手动维护，时时刻刻，事无巨细的为您服务，强大的自动化部署功能让这一切更简单', icon: 'agreement'},
            {title: '流程管理', desc: '权限申请、资源申请都可以流程化管理，运维更简单，记录更有迹可循，管理更规范化', icon: 'agreement'}
          ]
        },
        {
          name: '中间件',
          desc: '中间件',
          icon: 'daili',
          details: [
            {title: '兼容性', desc: '全面兼容MySQL全部语法，支持读写分离及MySQL原生Hint，透明设计让您应用自如。', icon: 'agreement'},
            {title: '使用友好', desc: '丰富的配置参数及原生的MySQL配置参数语法，上手特别容易，像使用MySQL一样使用中间件', icon: 'agreement'},
            {title: '日志', desc: '所有在中间层发生的故事，它都为您记录下来，信息丰富且不影响性能，让您用得放心，使的安心。', icon: 'agreement'}
          ]
        },
        {
          name: 'Arkagent',
          desc: '功能丰富的Agent',
          icon: 'dailishang',
          details: [
            {title: '功能丰富', desc: '采集所有您想要采集的数据，发现任何小小的变化，都会及时向您汇报', icon: 'agreement'},
            {title: '插件式', desc: '每一个功能都是一个独立的插件，支持热插拔，支持集中管理，支持在线升级', icon: 'agreement'},
            {title: '还是一个哨兵', desc: '除了采集基本数据之外，还会帮您收集并分析慢查询，帮您做数据库的巡检等操作，时刻为您保驾护航。', icon: 'agreement'}
          ]
        },
        {
          name: '大数据服务',
          desc: '大数据服务',
          icon: 'dashuju3',
          details: [
          ]
        },
        {
          name: '极数学院培训',
          desc: '极数学院培训',
          icon: 'peixun1',
          details: [
            {title: '专业知识', desc: '每一位老师，都是业界多年资深专家，他们知道的，都会告诉您，您想知道的，他们尽全力。', icon: 'agreement'},
            {title: '前沿技术', desc: '及时把握Oracle官方技术及发展动态，让您充分了解自身及发展方向，站得高，看得远。', icon: 'agreement'},
            {title: '课程定制', desc: '如果您想要有针对性地补充一些专业知识，我们也一定能满足您，把最珍贵的时间都花在您最感兴趣的地方。', icon: 'agreement'}]
        },
        {
          name: '慢查询分析与自动化优化',
          desc: '慢查询分析与自动化优化',
          icon: 'shujuchaxun',
          details: [
          ]
        },
        {
          name: '自动化数据库巡检',
          desc: '自动化数据库巡检',
          icon: 'xunjian',
          details: [
          ]
        }
      ],
      product: {}
    };
  },
  mounted() {
    console.log(this.$route);
    let products = this.products;
    let name = this.$route.params.name;
    for (var i = 0, len = products.length; i < len; i++) {
      if (products[i].name === name) {
        this.product = products[i];
      }
    }
    console.log(this.product);
  },
  components: {
    box
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.product-detail{
  .mask{
    position: relative;
    padding:0;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    height: 370px;
    .background{
      width: 100%;
      height: 100%;
    }
    .bg{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #161A1D;
      opacity: 0.6;
      filter: alpha(opacity=60);
      -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(60));
      -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:hover{
      .background{
        opacity: 0;
        filter: alpha(opacity=0);
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
      }
      .bg{
        background: #00c2de;
        opacity: 0.9;
        filter: alpha(opacity=90);
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(90));
      }
      .content{
        top: 13%;
        [class^="icon-"]{
          color: #fff;
        }
        .item-desc{
          opacity: 1;
          filter: alpha(opacity=100);
          -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
        }
      }


    }
    .content{
      position: absolute;
      left: 0;
      right: 0;
      top: 100px;
      bottom: 0;
      -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      [class^="icon-"]{
        font-size: 60px;
        color: #00c2de;
      }
      .item-title,.item-subtitle{
        color: #fff;
        font-size: 22px;
        line-height: 24px;
        margin: 0;
        padding: 0;
        margin-top: 24px;
        font-weight: bold;
        -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .item-subtitle{
        font-size: 15px;
        font-weight: normal;
        margin-top: 8px;
      }
      .item-desc{
        opacity: 0;
        font-size: 12px;
        color: #fff;
        text-align: center;
        margin-top: 10px;
        padding: 0px 20px;
        line-height: 20px;
        height: 72px;
        filter: alpha(opacity=0);
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
        -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        a{
          color:#fff;
        }
      }
    }
  }
}
</style>
