<template>
  <div class="main training">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">SCHOOL</h3>
          <h2 class="content-title-ch">极数学院</h2>
        </div>
        <p class="col-md-12 col-sm-12 col-xs-12 text-center">
          极致技术，乐在分享
        </p>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-4">
          <div class="ot-portfolio-item">
            <figure class="effect-bubba">
              <img src="static/images/info1.jpg" alt="img02" class="img-responsive">
              <figcaption>
                <h2>面向社会人员的MySQL相关培训</h2>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-4">
          <div class="ot-portfolio-item">
            <figure class="effect-bubba">
              <img src="static/images/info2.jpg" alt="img02" class="img-responsive">
              <figcaption>
                <h2>面向企业的MySQL相关培训</h2>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-4">
          <div class="ot-portfolio-item">
            <figure class="effect-bubba">
              <img src="static/images/info3.jpg" alt="img02" class="img-responsive">
              <figcaption>
                <h2>产品相关培训</h2>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
  .training{
    background: #fcfcfc;
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
