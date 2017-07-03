<template>
  <div class="main products-com">
    <div class="container">
      <div class="row products" v-cloak>
        <div class="col-md-3 text-center product" v-for="(product, index) in products" v-show="index < defaultLen">
          <i class="icon-training1"></i>
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
  const DEFAULTLEN = 8;
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

  .products{
    margin-top: 40px;
  .product{
    margin-bottom: 20px;
  [class^="icon-"]{
    display: block;
    font-size: 50px;
    margin-bottom: 10px;
  }
  &:hover{
     color: #2aacdd;
   }
  }
  .show-more{
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
  &:hover{
     color: #2aacdd;
     border-color: #2aacdd;
   }
  }
  }





</style>
