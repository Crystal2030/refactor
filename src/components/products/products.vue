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
            <i class="iconfont" :class="`icon-${product.icon}`"></i>
            <div class="product-name">{{product.name}}</div>
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
            icon: 'shenhe3'
          },
          {
            name: 'MySQL实时异构同步平台',
            desc: 'MySQL实时异构同步平台',
            icon: 'agreement'
          },
          {
            name: '自动化备份平台',
            desc: '自动化备份平台',
            icon: 'beifentongxunlu'
          },
          {
            name: '自动化归档平台',
            desc: '自动化归档平台',
            icon: 'crm26'
          },
          {
            name: '智能监控平台',
            desc: '智能监控平台',
            icon: 'jiankong2'
          },
          {
            name: '自动化运维管理平台',
            desc: '自动化运维管理平台',
            icon: 'dashujujiaoyi'
          },
          {
            name: '中间件',
            desc: '中间件',
            icon: 'daili'
          },
          {
            name: 'Arkagent',
            desc: '功能丰富的Agent',
            icon: 'dailishang'
          },
          {
            name: '大数据服务',
            desc: '大数据服务',
            icon: 'dashuju3'
          },
          {
            name: '极数学院培训',
            desc: '极数学院培训',
            icon: 'peixun1'
          },
          {
            name: '慢查询分析与自动化优化',
            desc: '慢查询分析与自动化优化',
            icon: 'shujuchaxun'
          },
          {
            name: '自动化数据库巡检',
            desc: '自动化数据库巡检',
            icon: 'xunjian'
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

<style lang="scss" rel="stylesheet/scss">
  .products-com {
    .product {
      margin-bottom: .4rem;
      transition: display .35s;
      .iconfont {
        display: block;
        font-size: .5rem;
        margin-bottom: .1rem;
      }
      &:hover {
        color: #2aacdd;
      }
      .product-name{
        font-size: .15rem;
      }
    }
    .show-more {
      display: block;
      width: 1.2rem;
      height: .36rem;
      line-height: .36rem;
      margin: .35rem auto .4rem;
      text-align: center;
      font-size: .14rem;
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
