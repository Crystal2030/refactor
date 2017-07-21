<template>
  <div class="main products-com">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12" ref="provider">
          <div class="section-title">
            <h3 class="content-title-en">PRODUCTS</h3>
            <h2 class="content-title-ch">企业产品</h2>
          </div>
          <p class="col-md-12 col-sm-12 col-xs-12 text-center section-dec">
            总有一款产品满足您的需求，问题将迎刃而解
          </p>
        </div>
      </div>
        <div class="row products" v-cloak>
          <div class="col-md-4  col-sm-4 col-xs-4 text-center product" v-for="(product, index) in products" v-show="index < defaultLen">
            <router-link :to="{name:'detail',params:{name: product.name}}" >
              <i class="iconfont" :class="`icon-${product.icon}`"></i>
              <div class="product-name">{{product.name}}</div>
            </router-link>
          </div>
          <div class="col-md-12  col-sm-12 col-xs-12">
            <span class="show-more" @click.prevent="toggleShowAll">{{toggleText}}</span>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
  /* eslint-disable no-new */
  //  import $ from '../../../lib/jquery-1.11.3.min.js';
  const DEFAULTLEN = 6;
  export default {
    data() {
      return {
        scrollY: 0,
        showAll: false,
        defaultLen: DEFAULTLEN, // 默认显示几条产品
        toggleText: '查看全部',
        products: [
          {
            name: '自动化审核平台',
            desc: '自动化审核平台',
            icon: 'shenhe3',
            details: [
              {title: '高效运维', desc: '自动化审核，运维不再痛苦，弹指之间，轻松搞定', icon: 'zidonghuaguanli'},
              {title: '全程代劳', desc: '审核、执行、回滚、统计以及更多额外的贴心功能，更安全，更简单，更高效', icon: 'hezuohuoban'},
              {title: '一键式回滚', desc: '最是那一回车的心痛，不胜后悔药的难寻。同样还是回车，轻轻松松回滚，老板再也不担心你错删数据了', icon: 'beifen-copy'},
              {title: '审核精准', desc: '众里寻它千百度，自动审核就在MySQL源码处，利用MySQL原生的词法语法等审核原理来审核您的SQL，还有更精准的吗？', icon: 'shenhe3'},
              {title: '高度定制化', desc: '部门多？人员多？角色多？没关系！丰富的配置，自由的流程设置，完美实现您的需求', icon: 'midware'},
              {title: '可视化增强', desc: '全程图形化展示，所有操作一览无余，轻松把握任务状态，一切尽在掌握', icon: 'jiankong'}
            ]
          },
          {
            name: 'MySQL实时异构同步平台',
            desc: 'MySQL实时异构同步平台',
            icon: 'agreement',
            details: [
              {title: '异构存储', desc: '一款强大到可以将MySQL数据异构存储到您想要的数据库中的系统，您可以随心的订阅MySQL产生的任何增量数据', icon: 'guidang'},
              {title: '实时同步', desc: '不仅支持异构，还能做到高并发、无延迟的实时同步，让您可以轻松误悦地实现即时搜索及数据分析的功能', icon: 'tongbu'},
              {title: '多方案选择', desc: '此系统支持想要订阅功能的Kafka，也支持强大的分析型存储HBase，更支持您所熟悉的全文索引数据库ES，应有尽有，是您想要的吗？', icon: 'liuchengguanli'},
              {title: '精准过滤', desc: '此系统支持白名单、黑名单的定制，精准过滤，给您所想，祛您所厌', icon: 'shenhe2'},
              {title: '不多不少刚刚好', desc: '即使数据库挂掉，即使服务器宕机，仍保证数据无损，不多也不少，刚刚好', icon: 'jishuxingtaihao'},
              {title: '自动化高可用', desc: '构建高可用架构，三重防护，保您无忧', icon: 'zidonghuaguanli'}
            ]
          },
          {
            name: '自动化备份平台',
            desc: '自动化备份平台',
            icon: 'beifentongxunlu',
            details: [
              {title: '自定义策略', desc: '自定义轻重缓急，指定不同备份频率，既可以做到数据安全保证，又可以减少存储空间的浪费。', icon: 'dingzhi1'},
              {title: '自动化调度', desc: '界面操作简单，只需轻轻一点，在您预订的那个时间里，备份就自动完成了，让您永无后顾之忧', icon: 'zidonghuaguanli'},
              {title: '阶梯存储', desc: '让最有可能需要的备份集，与您保持零距离，在需要的时候，快速提供给您，减少不必要的等待时间。超过一定时间的备份集，将做压缩存储，减少空间浪费。', icon: 'weibiaoti3'},
              {title: '集中管理', desc: '备份的所有情况在平台上都一览无余，操作简单，轻松便捷', icon: 'liuchengguanli2'},
              {title: '备份集校验', desc: '解决了最后一丝不安全的可能性，备份下来的数据，必须有效', icon: 'beifentongxunlu'},
              {title: '扩展性', desc: '业务增长太快？数据量突增？备份平台快速方便的扩展性，时刻为您保驾护航。', icon: 'kuozhanshuxing'}
            ]
          },
          {
            name: '自动化归档平台',
            desc: '自动化归档平台',
            icon: 'crm26',
            details: [ // details 待内容
              {title: '实时准确', desc: '通过强大的Agent，记录所有您想要的数据，轻轻一点，您想看到的就会展现在您眼前 ', icon: 'shishi'},
              {title: '多维度展示', desc: '不只可以查看常规指标变化，还可以为您展示最需要关注的指标，让您洞察秋毫，应用自如。', icon: 'duoweidu'},
              {title: '智能化', desc: '监控平台结合大数据分析，华丽转身，变被动为主动，为你预测未来，让所有变化都不出您所料。', icon: 'yidongyunkongzhitaiicon58'}
            ]
          },
          {
            name: '智能监控平台',
            desc: '智能监控平台',
            icon: 'jiankong2',
            details: [
              {title: '实时准确', desc: '通过强大的Agent，记录所有您想要的数据，轻轻一点，您想看到的就会展现在您眼前 ', icon: 'shishi'},
              {title: '多维度展示', desc: '不只可以查看常规指标变化，还可以为您展示最需要关注的指标，让您洞察秋毫，应用自如。', icon: 'duoweidu'},
              {title: '智能化', desc: '监控平台结合大数据分析，华丽转身，变被动为主动，为你预测未来，让所有变化都不出您所料。', icon: 'yidongyunkongzhitaiicon58'}
            ]
          },
          {
            name: '自动化运维管理平台',
            desc: '自动化运维管理平台',
            icon: 'dashujujiaoyi',
            details: [
              {title: '全方位管理', desc: '运维过程中，您所关注的信息都在这里，应有尽有，界面友好，人性化展示', icon: 'linecar104'},
              {title: '全自动化', desc: '随时更新，时刻在线，无需任何手动维护，时时刻刻，事无巨细的为您服务，强大的自动化部署功能让这一切更简单', icon: '5_5zidonghuayunwei'},
              {title: '流程管理', desc: '权限申请、资源申请都可以流程化管理，运维更简单，记录更有迹可循，管理更规范化', icon: 'liuchengguanli'}
            ]
          },
          {
            name: '中间件',
            desc: '中间件',
            icon: 'daili',
            details: [
              {title: '兼容性', desc: '全面兼容MySQL全部语法，支持读写分离及MySQL原生Hint，透明设计让您应用自如。', icon: 'jianrongxing1'},
              {title: '使用友好', desc: '丰富的配置参数及原生的MySQL配置参数语法，上手特别容易，像使用MySQL一样使用中间件', icon: 'hezuohuoban'},
              {title: '日志', desc: '所有在中间层发生的故事，它都为您记录下来，信息丰富且不影响性能，让您用得放心，使的安心。', icon: 'rizhi'}
            ]
          },
          {
            name: 'Arkagent',
            desc: '功能丰富的Agent',
            icon: 'dailishang',
            details: [
              {title: '功能丰富', desc: '采集所有您想要采集的数据，发现任何小小的变化，都会及时向您汇报', icon: '3dashuju'},
              {title: '插件式', desc: '每一个功能都是一个独立的插件，支持热插拔，支持集中管理，支持在线升级', icon: 'middleware'},
              {title: '还是一个哨兵', desc: '除了采集基本数据之外，还会帮您收集并分析慢查询，帮您做数据库的巡检等操作，时刻为您保驾护航。', icon: 'bingyi'}
            ]
          },
          {
            name: '大数据服务',
            desc: '大数据服务',
            icon: 'dashuju3',
            details: [ // details 待内容
              {title: '实时准确', desc: '通过强大的Agent，记录所有您想要的数据，轻轻一点，您想看到的就会展现在您眼前 ', icon: 'shishi'},
              {title: '多维度展示', desc: '不只可以查看常规指标变化，还可以为您展示最需要关注的指标，让您洞察秋毫，应用自如。', icon: 'duoweidu'},
              {title: '智能化', desc: '监控平台结合大数据分析，华丽转身，变被动为主动，为你预测未来，让所有变化都不出您所料。', icon: 'yidongyunkongzhitaiicon58'}
            ]
          },
          {
            name: '极数学院培训',
            desc: '极数学院培训',
            icon: 'peixun1',
            details: [
              {title: '专业知识', desc: '每一位老师，都是业界多年资深专家，他们知道的，都会告诉您，您想知道的，他们尽全力。', icon: 'beifen'},
              {title: '前沿技术', desc: '及时把握Oracle官方技术及发展动态，让您充分了解自身及发展方向，站得高，看得远。', icon: 'jishu'},
              {title: '课程定制', desc: '如果您想要有针对性地补充一些专业知识，我们也一定能满足您，把最珍贵的时间都花在您最感兴趣的地方。', icon: 'kecheng2'}]
          },
          {
            name: '慢查询分析与自动化优化',
            desc: '慢查询分析与自动化优化',
            icon: 'shujuchaxun',
            details: [ // details 待内容
              {title: '实时准确', desc: '通过强大的Agent，记录所有您想要的数据，轻轻一点，您想看到的就会展现在您眼前 ', icon: 'shishi'},
              {title: '多维度展示', desc: '不只可以查看常规指标变化，还可以为您展示最需要关注的指标，让您洞察秋毫，应用自如。', icon: 'duoweidu'},
              {title: '智能化', desc: '监控平台结合大数据分析，华丽转身，变被动为主动，为你预测未来，让所有变化都不出您所料。', icon: 'yidongyunkongzhitaiicon58'}
            ]
          },
          {
            name: '自动化数据库巡检',
            desc: '自动化数据库巡检',
            icon: 'xunjian',
            details: [ // details 待内容
              {title: '实时准确', desc: '通过强大的Agent，记录所有您想要的数据，轻轻一点，您想看到的就会展现在您眼前 ', icon: 'shishi'},
              {title: '多维度展示', desc: '不只可以查看常规指标变化，还可以为您展示最需要关注的指标，让您洞察秋毫，应用自如。', icon: 'duoweidu'},
              {title: '智能化', desc: '监控平台结合大数据分析，华丽转身，变被动为主动，为你预测未来，让所有变化都不出您所料。', icon: 'yidongyunkongzhitaiicon58'}
            ]
          }
        ]

      };
    },
    methods: {
      toggleShowAll() {
        this.showAll = !this.showAll;
        if (!this.showAll) {
          this.toggleText = '查看全部';
          this.defaultLen = DEFAULTLEN;
        } else {
          this.defaultLen = this.products.length;
          this.toggleText = '收起';
        }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #products {
    .product {
      margin-bottom: .4rem;
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
        .product-name{
          font-size: 15px;
        }
      }
    }
    .show-more {
      display: block;
      width: 120px;
      height: 36px;
      line-height: 36px;
      margin: .35rem auto .4rem;
      text-align: center;
      font-size: 16px;
      color: #373d41;
      border: 1px solid #373d41;
      cursor: pointer;
      &:hover {
        color: #2aacdd;
        border-color: #2aacdd;
      }
    }
  }


</style>
