<template>
  <div>
    <nut-swiper
        direction="horizontal"
        ref="demo3"
        :loop="true"
        :canDragging="false"
        :paginationVisible="true"

    >
        <div  class="nut-swiper-slide gray" >
            <!-- <span>page 1</span> -->
            <img src="../../assets/img/offline/swipe.png" alt="" style="background-size:100% 100%">
        </div>
        <div  class="nut-swiper-slide gray_1" >
            <span>page 2</span>
        </div>
        <div  class="nut-swiper-slide gray" >
            <span>page 3</span>
        </div>
        <div  class="nut-swiper-slide gray_1" >
            <span>page 4</span>
        </div>
    </nut-swiper>

    <div class="shop">
        <div class="shop-title">
            <img src="../../assets/img/offline/author.jpg" alt="">
            <p>奈瑞儿美颜塑身SPA（东圃店）</p>
            <ul>
                <li>15万粉丝</li>
                <li>共180位网友推荐</li>
            </ul>
            <p>+关注</p>
        </div>
        <!-- <div class="rate">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <img src="../../assets/img/offline/star.svg" alt="">
          <span>320条</span>
        </div> -->
        <span class="tap">高大上 18</span>
        <span class="tap">交通便利 3</span>
        <span class="tap">技师专业 40</span><br />
        <span class="tap">无推销 28</span>
        <span class="tap">环境优雅 30</span>
        <span class="tap">服务热情 36</span>
    </div>

    <div class="all">
        <div class="time">
            <span class="title">营业时间</span>
            <span class="hour">1周一至周日1:00-21:00</span>
        </div>
        <div class="message">
            <div>
                <p class="shop">肤俊堂皮肤修复中心</p>
                <p class="site">中山大道西1138号合生骏景广场A座1527室</p>
                <p class="rice">
                    <img src="../../assets/img/offline/site.png" alt="">
                    <span>457m</span>
                </p>
            </div>
            <img class="phone" src="../../assets/img/offline/phone.png" alt="">
        </div>
    </div>

    <div>
        <div>
        <p class="title">提供的商品服务</p>
        <div class="content">
            <img :src="img" alt>
            <div class="message">
            <p>隆胸丰胸一举两得 活细胞脂肪丰富高存活率近三十年临床经验教授亲诊</p>
            <div class="bottom">
                <span class="price">￥800</span>
                <span>门市价：1599元</span>
                <span class="appointment">已预约309></span>
            </div>
            </div>
        </div>
        <div class="content">
            <img :src="img" alt>
            <div class="message">
            <p>隆胸丰胸一举两得 活细胞脂肪丰富高存活率近三十年临床经验教授亲诊</p>
            <div class="bottom">
                <span class="price">￥800</span>
                <span>门市价：1599元</span>
                <span class="appointment">已预约309></span>
            </div>
            </div>
        </div>
        </div>
        <div class="shop">
            <p class="title">门店介绍</p>
            <div class="introduce">
                <p>广州市奈瑞儿塑身美颜连锁股份有限公司，成立于2001年，是广东省知名的专业提供女性美容、美体服务的大型连锁机构，旗下美容院遍布广东珠三角地区，总部设在广州</p>
                <img :src="bigimg" alt="">
                <p>企业标志</p>
                <p>"奈瑞儿"企业标志是"蝴蝶",寓意为: 蝴蝶的美丽来自蜕变. 奈瑞儿的顾客在这里,蜕变出自己的美丽形体；奈瑞儿的员工在这里,蜕变出自己的完美人生</p>
                <p>企业规模</p>
                <p>广州奈瑞儿拥有100多名国内外知名美容顾问、200多名具有国家颁发专业证书的营养师，近2000名专业美容技师。“奈瑞儿”塑身美颜连锁机构遍布广东省各中心城市，拥有上百家直营连锁店，全省营业面积超过40000平方米，每天服务顾客超3000人次，已成为广东省最具规模、最为专业的塑身美胸连锁机构。“奈瑞儿”就像标志中的蝴蝶一样，把美丽、幸福带给了所有爱美女性。</p>
                <img :src="bigimg" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import img from "../../assets/img/offline/img.png"
import bigimg from "../../assets/img/offline/bigimg.png"

export default {
    data(){
        return{
            dataItem:null,
            dataImgItem:[],
            img,
            bigimg,
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.nut-swiper{height: 5rem;}
/* 店名模块 */
.shop .shop-title{height: 1.46rem;border-bottom: .01rem solid #f2f2f2;}
.shop .shop-title img{width: .88rem;height: .88rem;margin-left: .26rem;margin-right: .18rem;display: inline-block;}
.shop .shop-title p:nth-child(1){font-size: .3rem;color: #2B2B2B;font-weight: bold;display: inline-block;}
.shop .shop-title p:nth-child(2){height: .46rem;background: #F63B75;border-radius: .24rem;float: right;}
.shop .shop-title ul{}
.shop .shop-title ul li{float: left;font-size: .24rem;color: #999999;}
</style>
