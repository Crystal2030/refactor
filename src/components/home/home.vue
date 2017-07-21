<template>
  <div class="home">
    <!-- Swiper -->
    <div id="home" class="swiper-container">
      <canvas class="constellation" width="25.6rem" height="8.7rem"></canvas>
      <div class="parallax-bg" style="background-image:url('static/images/slider-bg.jpg'); background-size: cover;"
           data-swiper-parallax="-23%"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">自动化运维</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">早起的虫儿有鸟吃</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              引领技术潮流，构建高效核心
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">专业团队</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">团队成员很牛逼</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              经验丰富，技术过硬，Oracle官方认证是我们的核心竞争力
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">超强产品线</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">业界领先到企业级产品</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              我们主打多款数据库高可用产品、周边强大工具以及完善的管理及监控平台
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">大数据</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">大数据时代</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              这里有最懂你、最贴心的大数据服务，你想知道的，都会告诉你！
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="title" data-swiper-parallax="-100">超强阵容培训</div>
          <!--<div class="subtitle" data-swiper-parallax="-200">培训中的战斗机</div>-->
          <div class="text" data-swiper-parallax="-300">
            <p>
              这里有最懂你、最贴心的大数据服务，你想知道的，都会告诉你！
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
          <li class="col-md-3 col-sm-3 col-xs-3">
            <a >
              <i class="iconfont icon-hezuohuoban"></i>
              <h2>Oracle官方认证合作伙伴</h2>
            </a>
          </li>
          <li class="col-md-3 col-sm-3 col-xs-3">
            <a >
              <i class="iconfont icon-shujuku"></i>
              <h2>多年数据库运维经验</h2>
            </a>
          </li>

          <li class="col-md-3 col-sm-3 col-xs-3">
            <a >
              <i class="iconfont icon-guanyuguwen"></i>
              <h2>业内专家顾问团</h2>
            </a>
          </li>

          <li class="col-md-3 col-sm-3 col-xs-3">
            <a >
              <i class="iconfont icon-training"></i>
              <h2>专业深度培训</h2>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--product-->
    <products id="products"></products>
    <!--solution-->
    <solution id="solution"></solution>
    <!--bigdataservice-->
    <largeData id="largeData"></largeData>
    <!--machine-->
    <machine id="machine"></machine>
    <!--cloudService-->
    <cloudService id="cloudService"></cloudService>
    <!--training-->
    <training id="school"></training>
    <!--about-->
    <about id="about"></about>
  </div>
</template>

<script>
  /* eslint-disable no-new */

  import $ from 'jquery';
  import Swiper from 'swiper';
  import products from '../products/products.vue';
  import solution from '../solution/solution.vue';
  import largeData from '../largeData/largeData.vue';
  import machine from '../machine/machine.vue';
  import cloudService from '../cloudService/cloudService.vue';
  import training from '../training/training.vue';
  import about from '../about/about.vue';
  const DEFAULTLEN = 8;

  export default {
    props: {},
    data() {
      return {
        logo: 'static/images/logo-white.png',
        showAll: false,
        defaultLen: DEFAULTLEN, // 默认显示几条产品
        toggleText: '查看全部',
        scrollY: 0,
        mainHeight: []
      };
    },
    mounted() {
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
      this.constellation();
      $('canvas').constellation({
        line: {
          color: 'rgba(255, 255, 255, 1)'
        }
      });
    },
    methods: {
      animationHeader() {
        var docElem = document.documentElement;
        var didScroll = false;
        var changeHeaderOn = 300;

        function init() {
          window.addEventListener('scroll', function (event) {
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
      constellation() {
        (function ($, window) {
          /**
           * Makes a nice constellation on canvas
           * @constructor Constellation
           */
          function Constellation (canvas, options) {
            var $canvas = $(canvas);
            var context = canvas.getContext('2d');
            var defaults = {
              star: {
                color: 'rgba(255, 255, 255, 1)',
                width: 1
              },
              line: {
                color: 'rgba(255, 255, 255, 1)',
                width: 0.2
              },
              position: {
                x: 0, // This value will be overwritten at startup
                y: 0 // This value will be overwritten at startup
              },
              width: window.innerWidth,
              height: window.innerHeight,
              velocity: 0.1,
              length: 100,
              distance: 120,
              radius: 150,
              stars: []
            };
            var config = $.extend(true, {}, defaults, options);

            function Star () {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;

              this.vx = (config.velocity - (Math.random() * 0.5));
              this.vy = (config.velocity - (Math.random() * 0.5));

              this.radius = Math.random() * config.star.width;
            }

            Star.prototype = {
              create: function() {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                context.fill();
              },

              animate: function() {
                var i;
                for (i = 0; i < config.length; i++) {
                  var star = config.stars[i];
                  if (star.y < 0 || star.y > canvas.height) {
                    star.vx = star.vx;
                    star.vy = -star.vy;
                  } else if (star.x < 0 || star.x > canvas.width) {
                    star.vx = -star.vx;
                    star.vy = star.vy;
                  }

                  star.x += star.vx;
                  star.y += star.vy;
                }
              },

              line: function() {
                var length = config.length;
                var iStar;
                var jStar;
                var i;
                var j;

                for (i = 0; i < length; i++) {
                  for (j = 0; j < length; j++) {
                    iStar = config.stars[i];
                    jStar = config.stars[j];

                    if (
                      (iStar.x - jStar.x) < config.distance &&
                      (iStar.y - jStar.y) < config.distance &&
                      (iStar.x - jStar.x) > -config.distance &&
                      (iStar.y - jStar.y) > -config.distance
                    ) {
                      if (
                        (iStar.x - config.position.x) < config.radius &&
                        (iStar.y - config.position.y) < config.radius &&
                        (iStar.x - config.position.x) > -config.radius &&
                        (iStar.y - config.position.y) > -config.radius
                      ) {
                        context.beginPath();
                        context.moveTo(iStar.x, iStar.y);
                        context.lineTo(jStar.x, jStar.y);
                        context.stroke();
                        context.closePath();
                      }
                    }
                  }
                }
              }
            };

            this.createStars = function () {
              var length = config.length;
              var star;
              var i;

              context.clearRect(0, 0, canvas.width, canvas.height);

              for (i = 0; i < length; i++) {
                config.stars.push(new Star());
                star = config.stars[i];

                star.create();
              }

              star.line();
              star.animate();
            };

            this.setCanvas = function () {
              canvas.width = config.width;
              canvas.height = config.height;
            };

            this.setContext = function () {
              context.fillStyle = config.star.color;
              context.strokeStyle = config.line.color;
              context.lineWidth = config.line.width;
            };

            this.setInitialPosition = function () {
              if (!options || !options.hasOwnProperty('position')) {
                config.position = {
                  x: canvas.width * 0.5,
                  y: canvas.height * 0.5
                };
              }
            };

            this.loop = function (callback) {
              callback();

              window.requestAnimationFrame(function () {
                this.loop(callback);
              }.bind(this));
            };

            this.bind = function () {
              $canvas.on('mousemove', function(e) {
                config.position.x = e.pageX - $canvas.offset().left;
                config.position.y = e.pageY - $canvas.offset().top;
              });
            };

            this.init = function () {
              this.setCanvas();
              this.setContext();
              this.setInitialPosition();
              this.loop(this.createStars);
              this.bind();
            };
          }

          $.fn.constellation = function (options) {
            return this.each(function () {
              var c = new Constellation(this, options);
              c.init();
            });
          };
        })($, window);
      }
    },
    components: {
      products,
      solution,
      largeData,
      machine,
      cloudService,
      training,
      about
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .home{
    .constellation {
      position: absolute;
      top: 0px;
      z-index: 10;
    }
    .navbar-default {
      background-color: transparent;
      border-color: transparent;
      &.navbar-shrink {
        padding: 0;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
        background-color: #fff;
        .navbar-toggle{
          background-color: #1dabdf;
          .icon-bar{
            background: #fff;
          }
        }
        .navbar-nav{
          a{
            color: #222;
          }
        }
        .navbar-collapse{
          &.in{
            a{
              color: #fff;
            }
          }
        }
      }
      .navbar-brand{
        img{
          padding-top: 8px;
          width: 140px;
        }
      }
      .navbar-collapse{
        li{
          a{
            font-family: "Roboto",sans-serif;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 1px;
            position: relative;
            transition: color .2s ease-in-out;
            color: #fff;
            height: .6rem;
            line-height: .3rem;
            cursor: pointer;
            &:active{
              color: red;
            }
            &:before{
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 0;
              border-bottom: 2px solid;
              transition: width .2s ease-in-out;
            }
            &:hover,&:focus{
              outline: 0;
              color: #2aacdd;
              transition: color .2s ease-in-out;
            }
            &:hover:before{
              width: 100%;
            }
          }
        }
      }
      [aria-expanded="true"] {
        background: rgba(0,0,0,.8);
      }
      .navbar-toggle{
        background: #fff;
        border-color: #1dabdf;
        .icon-bar{
          background: #1dabdf;
        }
        &:hover,&:focus{
          background: #1dabdf;
          border-color: #1dabdf;
          .icon-bar{
            background: #fff;
          }
        }
      }
      .navbar-brand {
        padding: 0px;
        height: 60px;
      }
    }
    @media (min-width:768px) {
      .navbar-default
      {
        background-color: transparent;
        padding: 25px 0;
        -webkit-transition:padding .3s;
        -moz-transition:padding .3s;
        transition:padding .3s;
        border:0;
        .navbar-nav{
          .active{
            a{
              border-radius: 3px

            }
          }
        }
        &.navbar-shrink {
          padding: 0;
          box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
          background-color: #fff;
          .navbar-toggle{
            background-color: #222;
          }
          .navbar-nav{
            a{
              color: #222;
            }
          }
        }
      }
    }
    .section-title {
      margin-top: .7rem;
      margin-bottom: .4rem;
      color: #232323;
      [class^="content-title-"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        line-height: 35px;
        font-family: "Open Sans", Sans-serif;
        font-size: 32px;
        font-weight: normal;
        margin: 0;
        &.content-title-en {
          font-size: 28px;
        }
      }
    }
    .section-dec{
      font-size: 18px;
      margin-bottom: .2rem;
    }

    .box-container {
      width: 100%;
      background: #e2e2e2;
      ul {
        margin-bottom: 0;
        height: 1rem;
        text-align: center;
        li {
          height: 1rem;
          overflow: hidden;
          a {
            display: block;
            height: 1rem;
            line-height: .6rem;
            text-decoration: none;
            h2 {
              margin-top: 0;
              font-size: 14px;
              height: .23rem;
              overflow: hidden;
              color: #333;
              font-weight: normal;
            }
            img {
              width: .5rem;
            }
            .iconfont {
              padding-top: .1rem;
              display: block;
              color: #3e3e3e;
              font-size: 45px;
              &:hover {
                font-size: 50px;
                transition: font-size .3s ease-in-out;
              }
            }
          }
          &:hover {
            background: #eee;
          }
        }
      }
    }

    .swiper-container {
      width: 100%;
      height: 3.7rem;
      background: #000;
      .swiper-slide {
        font-size: 18px;
        color: #fff;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        padding-top: 1.4rem;
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
        font-size: 40px;
        font-weight: bold;
      }
      .swiper-slide .subtitle {
        font-size: 20px;
      }
      .swiper-slide .text {
        margin: 0 auto;
        font-size: .15rem;
        max-width: 60%;
        line-height: 1.3;
      }
      .swiper-pagination {
        bottom: .1rem;
      }
    }

  }


</style>
