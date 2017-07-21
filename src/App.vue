<template>
  <div>
    <vheader></vheader>
    <router-view></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vheader from '@/components/header/header';
  import vfooter from '@/components/footer/footer';
  export default {
    components: {
      vheader,
      vfooter
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
