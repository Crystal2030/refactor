<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mask slideleft">
        <img src="static/images/box1.png" alt="" class="background"/>
        <div class="bg"></div>
        <div class="content">
          <div class="item-img-panel">
            <i class="icon-shenhe"></i>
          </div>
          <h3 class="item-title">大数据服务</h3>
          <h4 class="item-subtitle"></h4>
          <ul class="item-desc">
            <li><a href="#">数据库日志中心构建</a></li>
            <li><a href="#">性能日志分析与预警</a></li>
            <li><a href="#">数据库资源分析预警</a></li>
            <li><a href="#">数据库巡检与预警</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 mask zoomin">
        <img src="static/images/box2.png" alt="" class="background"/>
        <div class="bg"></div>
        <div class="content">
          <div class="item-img-panel">
            <i class="icon-guanli"></i>
          </div>
          <h3 class="item-title">数据库一体机</h3>
          <h4 class="item-subtitle"></h4>
          <ul class="item-desc">
            <li><a href="#">MySQL数据库一体机</a></li>
            <li><a href="#">DM数据库一体机	</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 mask zoomin">
        <img src="static/images/box3.png" alt="" class="background"/>
        <div class="bg"></div>
        <div class="content">
          <div class="item-img-panel">
            <i class="icon-pingtai"></i>
          </div>
          <h3 class="item-title">培训服务</h3>
          <h4 class="item-subtitle"></h4>
          <ul class="item-desc">
            <li><a href="#">面向社会人员的MySQL相关培训</a></li>
            <li><a href="#">面向企业的MySQL相关培训</a></li>
            <li><a href="#">产品相关培训</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 mask slideright">
        <img src="static/images/box4.png" alt="" class="background"/>
        <div class="bg"></div>
        <div class="content">
          <div class="item-img-panel">
            <i class="icon-middleware"></i>
          </div>
          <h3 class="item-title">云服务</h3>
          <h4 class="item-subtitle"></h4>
          <ul class="item-desc">
            <li><a href="#">自动化审核云服务</a></li>
            <li><a href="#">数据库私有云、公有云服务</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" rel="stylesheet/scss">
  .mask{
    position: relative;
    padding:0;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    height: 370px;
  .background{
    width: 100%;
    height: 100%;
  }
  .bg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #161A1D;
    opacity: 0.6;
    filter: alpha(opacity=60);
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(60));
    -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover{
  .background{
    opacity: 0;
    filter: alpha(opacity=0);
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
  }
  .bg{
    background: #00c2de;
    opacity: 0.9;
    filter: alpha(opacity=90);
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(90));
  }
  .content{
    top: 13%;
    [class^="icon-"]{
      color: #fff;
    }
    .item-desc{
      opacity: 1;
      filter: alpha(opacity=100);
      -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
    }
  }


  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;
    -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  [class^="icon-"]{
    font-size: 60px;
    color: #00c2de;
  }
  .item-title,.item-subtitle{
    color: #fff;
    font-size: 22px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    margin-top: 24px;
    font-weight: bold;
    -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .item-subtitle{
    font-size: 15px;
    font-weight: normal;
    margin-top: 8px;
  }
  .item-desc{
    opacity: 0;
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin-top: 10px;
    padding: 0px 20px;
    line-height: 20px;
    height: 72px;
    filter: alpha(opacity=0);
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
    -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    a{
      color:#fff;
    }
  }
  }
  }
</style>
