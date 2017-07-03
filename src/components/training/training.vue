<template>
  <div class="main training">
    <div class="index-content graybg">
      <ul class="trait-list clearfix animationLCR show col-md-12">
        <li class="slideleft col-md-4 col-sm-4 col-xs-12">
          <i class="icon-db"></i>
          <div class="traitname">数据库公共培训</div>
          <ul class="traitintro">
            <li>MySQL运维方向培训</li>
            <li>MySQL内核开发培训</li>
            <li>MySQL开发方向培训</li>
          </ul>
        </li>
        <li class="zoomin col-md-4 col-sm-4 col-xs-12">
          <i class="icon-company"></i>
          <div class="traitname">企业内部培训</div>
          <ul class="traitintro">
            <li>定制化培训</li>
            <li>7天运维强化培训(运维+开发)</li>
          </ul>
        </li>
        <li class="slideright col-md-4 col-sm-4 col-xs-12">
          <i class="icon-training"></i>
          <div class="traitname">产品培训</div>
          <ul class="traitintro">
            <li>DB Proxy服务培训</li>
            <li>MAMP平台日常培训</li>
            <li>Dass运维、原理培训</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
  .training{
    .index-content{
      .icon-company {
        color: #63b7fc!important;
      }
      .icon-training {
        color: #ffa550!important;
      }
    }

  }
  .case {
    float: left;
    width: 260px;
    height: 320px;
    margin-left: 52px;
    position: relative;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    .case {
      float: left;
      width: 260px;
      height: 320px;
      margin-left: 52px;
      position: relative;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      .name {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #272727;
        font-size: 18px;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        .template-container {
          width: 100%;
          height: 100%;
          -webkit-transition: all .5s ease;
          transition: all .5s ease;
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          .cover {
            -webkit-transform: translateZ(130px);
            transform: translateZ(130px);
          }
        }

      }
      .content {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
        .qr-code-container {
          position: relative;
          width: 260px;
          height: 260px;
          background: rgba(255,251,249,.7);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
      }
      .hover{
        border: 1px solid #ff6b00;
        border-radius: 4px;
        -webkit-transform-origin: top right;
        -ms-transform-origin: top right;
        transform-origin: top right;
        -webkit-transform: rotateY(-270deg) translateX(130px);
        transform: rotateY(-270deg) translateX(130px);
        .qr-code {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 10px;
          width: 200px;
          height: 200px;
          background: #fff;
          border-radius: 4px;
        }
        .name {
          background: #fff;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }

  }
</style>
