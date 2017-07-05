<template>
  <div class="main training">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h3 class="content-title-en">TRAINING</h3>
          <h2 class="content-title-ch">培训</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="ot-portfolio-item">
            <figure class="effect-bubba">
              <img src="static/images/info1.jpg" alt="img02" class="img-responsive">
              <figcaption>
                <h2>数据库公共培训</h2>
                <ul class="train-info">
                  <li>MySQL运维方向培训</li>
                  <li>MySQL内核开发培训</li>
                  <li>MySQL开发方向培训</li>
                </ul>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-md-4">
          <div class="ot-portfolio-item">
            <figure class="effect-bubba">
              <img src="static/images/info2.jpg" alt="img02" class="img-responsive">
              <figcaption>
                <h2>数据库公共培训</h2>
                <ul class="train-info">
                  <li>MySQL运维方向培训</li>
                  <li>MySQL内核开发培训</li>
                  <li>MySQL开发方向培训</li>
                </ul>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-md-4">
          <div class="ot-portfolio-item">
            <figure class="effect-bubba">
              <img src="static/images/info3.jpg" alt="img02" class="img-responsive">
              <figcaption>
                <h2>数据库公共培训</h2>
                <ul class="train-info">
                  <li>MySQL运维方向培训</li>
                  <li>MySQL内核开发培训</li>
                  <li>MySQL开发方向培训</li>
                </ul>
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
    figure {
      position: relative;
      overflow: hidden;
      margin: 10px 1%;
      background: #726FB9;
      text-align: center;
      cursor: pointer;
      figcaption {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &::before,&::after{
          position: absolute;
          top: 30px;
          right: 30px;
          bottom: 30px;
          left: 30px;
          content: '';
          opacity: 0;
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
        }
        &::before{
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
          -webkit-transform: scale(0,1);
          transform: scale(0,1);
        }
        &::after{
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
          -webkit-transform: scale(1,0);
          transform: scale(1,0);
        }
      }
      &.effect-bubba {
        background: #000;
        margin-bottom: 30px;
        h2 {
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          padding-top: 30%;
          -webkit-transition: -webkit-transform 0.35s;
          transition: transform 0.35s;
          -webkit-transform: translate3d(0,-20px,0);
          transform: translate3d(0,-20px,0);
        }
        ul.train-info>li{
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          padding: 2px 2.5em;
          opacity: 0;
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
          -webkit-transform: translate3d(0,20px,0);
          transform: translate3d(0,20px,0);
        }
        img{
          opacity: .8;
          transition: opacity 0.35s;
        }
        &:hover{
          img{
            opacity: 0.4;
          }
          figcaption::before, figcaption::after{
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          h2, .train-info>li{
            opacity: 1;
            -webkit-transform: translate3d(0,-50px,0);
            transform: translate3d(0,-50px,0);
          }
        }
      }
    }
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
