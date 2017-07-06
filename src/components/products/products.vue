<template>
  <div class="main products-com">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12" ref="provider">
          <div class="section-title">
            <h3 class="content-title-en">PRODUCTS</h3>
            <h2 class="content-title-ch">产品</h2>
          </div>
          <p class="col-md-12 col-sm-12 col-xs-12 text-center">
            极数云舟拥有国内一系列专家，技术领域涉及MySQL、Redis、Hbase等数据库平台架构，为用户提供全套平台解决方案。主要产品包括：Estimate(MySQL
            审核)、MAMP(DB管理平台)、Daas(数据即服务)
          </p>
        </div>
      </div>
      <div class="row products" v-cloak>
        <div class="col-md-4 text-center product" v-for="(product, index) in products" v-show="index < defaultLen">
          <i class="iconfont icon-training"></i>
          <div class="product-name">{{product.name}}</div>
        </div>
        <div class="col-md-12">
          <span class="show-more" @click="toggleShowAll">{{toggleText}}</span>
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
            desc: '自动化审核平台'
          },
          {
            name: 'MySQL实时异构同步平台',
            desc: 'MySQL实时异构同步平台'
          },
          {
            name: '自动化备份平台',
            desc: '自动化备份平台'
          },
          {
            name: '自动化归档平台',
            desc: '自动化归档平台'
          },
          {
            name: '智能监控平台',
            desc: '智能监控平台'
          },
          {
            name: '自动化运维管理平台',
            desc: '自动化运维管理平台'
          },
          {
            name: '中间件',
            desc: '中间件'
          },
          {
            name: 'Arkagent',
            desc: '功能丰富的Agent'
          },
          {
            name: '大数据服务',
            desc: '大数据服务'
          },
          {
            name: '极数学院培训',
            desc: '极数学院培训'
          },
          {
            name: '慢查询分析与自动化优化',
            desc: '慢查询分析与自动化优化'
          },
          {
            name: '自动化数据库巡检',
            desc: '自动化数据库巡检'
          }
        ]
      };
    },

    methods: {
      toggleShowAll() {
        this.showAll = !this.showAll;
        if (this.showAll) {
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

<style lang="scss" rel="stylesheet/scss">

  .products-com {
    .product {
      margin-bottom: 40px;
      [class^="icon-"] {
        display: block;
        font-size: 50px;
        margin-bottom: 10px;
      }
      &:hover {
        color: #2aacdd;
      }
    }
    .show-more {
      display: block;
      width: 120px;
      height: 36px;
      line-height: 36px;
      margin: 35px auto 40px;
      text-align: center;
      font-size: 14px;
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
