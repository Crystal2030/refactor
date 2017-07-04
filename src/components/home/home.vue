<template>
  <div class="main home">
    <vheader></vheader>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="parallax-bg" style="background-image:url('static/images/slider-bg.jpg'); background-size: 100%" data-swiper-parallax="-23%"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">自动化运维	</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">早起的虫儿有鸟吃</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              <!--自动化运维内容，自动化运维内容，自动化运维内容，自动化运维内容，自动化运维内容，自动化运维内容-->
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">专业团队</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">团队成员很牛逼</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              <!--专业团队，一流人才，专业团队，一流人才，专业团队，一流人才，专业团队，一流人才，专业团队，一流人才-->
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">超强产品线</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">业界领先到企业级产品</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              <!--简单高效、处理能力可弹性伸缩的计算服务，帮助您快速构建更稳定、安全的应用，提升运维效率，降低 IT 成本，使您更专注于核心业务创新。-->
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">大数据</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">大数据时代</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              <!--简单高效、处理能力可弹性伸缩的计算服务，帮助您快速构建更稳定、安全的应用，提升运维效率，降低 IT 成本，使您更专注于核心业务创新。-->
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">超强阵容培训</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">培训中的战斗机</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              <!--简单高效、处理能力可弹性伸缩的计算服务，帮助您快速构建更稳定、安全的应用，提升运维效率，降低 IT 成本，使您更专注于核心业务创新。-->
            </p>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
      <!-- Add Navigation -->
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
      <!-- Add Arrow down -->
      <!--<div class="arrow-down" @click.prevent="toProvider">
        <img src="static/images/arrow_down.png" alt=""/>
      </div>-->
    </div>
    <div class="box-container">
      <div class="row">
        <ul>
          <li class="col-md-3">
            <a href="#" target="_blank">
              <i class="icon-partner"></i>
              <h2>Oracle官方认证合作伙伴</h2>
            </a>
          </li>
          <li class="col-md-3">
            <a href="#" target="_blank">
              <i class="icon-db"></i>
              <h2>数据库运维经验丰富</h2>
            </a>
          </li>

          <li class="col-md-3">
            <a href="#" target="_blank">
              <i class="icon-consult"></i>
              <h2>业内专家顾问团</h2>
            </a>
          </li>

          <li class="col-md-3">
            <a href="#" target="_blank">
              <i class="icon-training"></i>
              <h2>专业深度培训</h2>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--product-->
    <products></products>
    <!--service-->
    <service></service>
    <!--training-->
    <training></training>
    <!--about-->
    <about></about>
    <vfooter></vfooter>
  </div>
</template>

<script>
  /* eslint-disable no-new */
  import vheader from '../header/header.vue';
  import vfooter from '../footer/footer.vue';
  import $ from '../../../lib/jquery-1.11.3.min.js';
  import Swiper from '../../../lib/swiper.min.js';
  import box from '../box/box.vue';
  import products from '../products/products.vue';
  import service from '../service/service.vue';
  import training from '../training/training.vue';
  import about from '../about/about.vue';
  const DEFAULTLEN = 8;
  export default {
    props: {

    },
    data() {
      return {
        logo: 'static/images/logo-white.png',
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
    mounted() {
      console.log($('.arrow-down'));
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
        autoplay: 3000,
        loop: true
      });
    this.animationHeader();
  },
    methods: {
      animationHeader() {
        var docElem = document.documentElement;
        var didScroll = false;
        var changeHeaderOn = 300;

        function init() {
          window.addEventListener('scroll', function(event) {
            if (!didScroll) {
              didScroll = true;
              setTimeout(scrollPage, 250);
            }
          }, false);
        }

        function scrollPage() {
          var sy = scrollY();
          if (sy >= changeHeaderOn) {
            $('.navbar').addClass('navbar-shrink');
            $('.navbar-brand img').attr('src', 'static/images/logo-blue.png');
          } else {
            $('.navbar').removeClass('navbar-shrink');
            $('.navbar-brand img').attr('src', 'static/images/logo-white.png');
          }
          didScroll = false;
        }

        function scrollY() {
          return window.pageYOffset || docElem.scrollTop;
        }

        init();
      },
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
    },
    components: {
      vheader,
      box,
      products,
      service,
      training,
      about,
      vfooter
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">

.section-title{
  margin-top: 70px;
  margin-bottom: 40px;
  color: #232323;
  [class^="content-title-"]{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    line-height: 35px;
    font-size: 32px;
    font-weight: normal;
    margin:0;
    &.content-title-en{
     font-size: 24px;
    }
  }
}

.box-container{
  width: 100%;
  background: #e2e2e2;
  ul {
    margin-bottom: 0;
    height: 100px;
    text-align: center;
    li{
      height: 100px;
      overflow: hidden;
      a{
        height: 100px;
        line-height: 70px;
        text-decoration: none;
        h2{
          margin-top: 10px;
          font-size: 14px;
          color: #333;
          font-weight: normal;
        }
        img{
          width: 50px;
        }
        [class^="icon-"]{
          padding-top: 10px;
          display: block;
          color: #333;
          font-size: 45px;
          &:hover{
            font-size: 55px;
            transition: font-size .3s ease-in-out;
           }
        }
      }
      &:hover{
        background: #eee;
      }
    }
  }
}


.swiper-container {
  width: 100%;
  height: 85vh;
  background: #000;
  .swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    padding-top: 15%;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }
  .swiper-slide .subtitle {
    font-size: 21px;
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
  .swiper-pagination{
    bottom: 10px;
  }
@keyframes xguide_down{
  0%,100%{
    -o-transform:scale(0.8);
    -moz-transform:scale(0.8);
    -webkit-transform:scale(0.8);
    -ms-transform:scale(0.8);
    transform:scale(0.8);
    opacity:0.5
  }
  50%{
    transform:scale(1.0);
    -moz-transform:scale(1.0);
    -o-transform:scale(1.0);
    -webkit-transform:scale(1.0);
    -ms-transform:scale(1.0);
    opacity:1
  }

}
@-webkit-keyframes xguide_down{
  0%,100%{
    -o-transform:scale(0.8);
    -moz-transform:scale(0.8);
    -webkit-transform:scale(0.8);
    -ms-transform:scale(0.8);
    transform:scale(0.8);
    opacity:0.5
  }
  50%{
    -webkit-transform:scale(1.0);
    -moz-transform:scale(1.0);
    -o-transform:scale(1.0);
    -ms-transform:scale(1.0);
    transform:scale(1.0);
    opacity:1
  }

}
@-moz-keyframes xguide_down{
  0%,100%{
    -o-transform:scale(0.8);
    -moz-transform:scale(0.8);
    -webkit-transform:scale(0.8);
    -ms-transform:scale(0.8);
    transform:scale(0.8);
    opacity:0.5
  }
  50%{
    -moz-transform:scale(1.0);
    -o-transform:scale(1.0);
    -webkit-transform:scale(1.0);
    -ms-transform:scale(1.0);
    transform:scale(1.0);
    opacity:1
  }

}
@-o-keyframes xguide_down{
  0%,100%{
    -o-transform:scale(0.8);
    -moz-transform:scale(0.8);
    -webkit-transform:scale(0.8);
    -ms-transform:scale(0.8);
    transform:scale(0.8);
    opacity:0.5
  }
  50%{
    -o-transform:scale(1.0);
    -moz-transform:scale(1.0);
    -webkit-transform:scale(1.0);
    -ms-transform:scale(1.0);
    transform:scale(1.0);
    opacity:1
  }

}
  .arrow-down{
    position: absolute;
    left: 50%;
    bottom: 40px;
    margin-left: -25px;
    width: 50px;
    height: 50px;
    img{
      width: 30px;
      animation: 'xguide_down' 2s ease-in-out 2s infinite;
    }
  }
}



</style>
