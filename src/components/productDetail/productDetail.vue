<template>
  <div class="product-detail">我是详情页</div>
</template>

<script>
export default {
  methods: {
    props: {
      product: {
        type: Array
      }
    },
    mounted() {
      console.log(this.product);
    },
    GetRequest() {
      var url = location.search;// 获取url中?周末的字符串
      var theRequest = {};
      if (url.indexOf('?') !== -1) {
         var str = url.substr(1);
         var strs = str.split('&');
         for (var i = 0; i < strs.length; i++) {
            theRequest[str[i].split('=')[0]] = strs.split('=')[1];
         }
      }
      return theRequest;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.product-detail{
    background: #a6e1ec;
}
</style>
