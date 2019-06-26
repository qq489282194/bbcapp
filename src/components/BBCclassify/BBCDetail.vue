<template>
  <div>
    <div class="nav">
        <ul>
            <li @click="backRouter()">
                <i class="icon-back"></i>
            </li>
            <li @click="isShare = true">
                <i class="icon-share"></i>
            </li>
        </ul>
    </div>
    <div class="detail-header">
      <p class="title" v-html="article.title">别浪费你的护肤品了，去买个美容仪吧</p>
    </div>
    <div class="look">
      <!-- <img src="../../assets/img/bbcdetail/u838.svg" /> -->
      <i class="icon-browse"></i>
      <span v-html="article.readCount">5000</span>
    </div>
    <div class="detail-main" v-html="article.content">
      <!-- <p>💢说到美容仪，现在家里至少十几个了吧，但都不是自己买的，你们猜猜都是哪来的？😎哈哈，认真看今天的贴子，老规矩在互动里抽一个宝宝送个美容仪🎁给你！我这么喜欢送东西，上辈子肯定是个男人，宠死我家女人的那种，愿嫁的举手🙋，</p>
      <p>💢先说正题啊，大部分宝宝其实分不清各种仪器，每次问我“Luna和Refa哪个好用？”“Tripollar和雅萌我应该买哪一个呀？”我真的不知怎么回答！不同年龄、不同肤质、不同问题、不同的经济能力..........</p>
      <p>💢但家用美容仪以保养预防为主，效果不可能像医院的项目立竿见影，但对皮肤无损伤，较安全。</p>
      <p>1⃣️油性肌肤，毛孔易堵塞的</p>
      <p>💌选择清洁类的洗脸仪，目前市场上最常见的洗脸仪应该就是Luna和科莱丽，这两款洁面仪都是依靠声波震动来达到肌肤清洁的。</p>
      <p>💌Luna是属于医用硅胶质地，易清洗，价格在1200元左右。</p>
      <p>💌科莱丽的洗脸仪是刷毛刷头，需要定期清洗和更换。</p>
      <p>⚠️🙅干性肌肤和敏感肌肤慎用洗脸仪！</p>
      <img src="../../assets/img/bbcdetail/u835.png" alt>
      <p>💌雅萌呢，和Tripollar原理相似，它带有另外的导入效果，3000不到。</p>
      <p>注意⚠️⚠️：射频类的瘦脸慎用，说过很多次了！</p>
      <p>3⃣️皮肤有色斑、痘印，有白净需求的</p>
      <p>💌选择非剥脱性纳米点阵激光美容仪，易科美首选，价格不到3500元。</p>
      <p>4⃣️皮肤老化、松弛、下垂、法令纹.....</p>
      <p>💌选择提拉方面的仪器，提拉的仪器基本上是采用微电流技术，主要是调理肌肉，促进微循环，配合按摩可以消除水肿，关键是瘦脸也能用！</p>
      <p>💌Refa是很火，但它是性价比最低的，它通过太阳能板产生电流，所以电流量非常小，只有30多微安，效果微乎其微，性价比不高，1300元左右。</p>
      <p>💌Nuface是首选，它也是采用微电流技术，但是Nuface的微电流控制在了335微安，是对人体温和，安全且真正有作用的安全电流值，现在新款另带红光和眼唇纹配件，一机多用，性价比卓然。</p>
      <p>💌黄金棒没有任何科技含量，不用浪费钱。</p>
      <p>来吧！做我的女人美容仪我送你！这后宫佳丽三千，要好好想想选哪个？快来让我爱上你！</p> -->
    </div>

    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
    </div>
    <div class="footer-share-modules" v-show="isShare">
      <div class="footer-title-modules">
        <p>分享</p>
      </div>
      <ul class="clear-both">
        <li @click="shareFun('weChat',1)">
          <img src="../../assets/img/WeChat@2x.png"/>
          <p>微信分享</p>
        </li>
        <li @click="shareFun('friendCircle',2)">
          <img src="../../assets/img/CircleofFriends@2x.png"/>
          <p>朋友圈分享</p>
        </li>
        <li @click="shareFun('qq',3)">
          <img src="../../assets/img/QQ@2x.png"/>
          <p>QQ分享</p>
        </li>
        <li @click="shareFun('sina',4)">
          <img src="../../assets/img/weibo@2x.png"/>
          <p>微博分享</p>
        </li>
      </ul>
      <button @click="isShare = false" class="share-footer-button">取消</button>
    </div>
  </div>
</template>

<script>

import * as USER_API from '@/api/user'
import store from "@/store/index"
import { debug } from 'util';

export default {
    data(){
        return{
            userId:store.state.userId,
            article:{
                bigTypeId: "",
                content: "",
                id: "",
                readCount: 0,
                shareUrl: "",
                title: "",
                updateTime: ""
            },
            isShare:false,
        }
    },
    mounted(){
        this.loadPostUserByUserid()
    },
    methods:{
        // 获取文章
      loadPostUserByUserid(){
        let params = { "id":this.userId, };
        USER_API.getArticle(params).then(data => {
          
          if(data){
            this.article = data;
          }
        });
      },
        // 分享模块
      shareFun(type,typeNumber){
        let title = this.article.title
        let description = "";
        let imgSrc = "";
        let hostUrl = this.article.shareUrl
        let activityId = "";
        this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
      },
    }
}
</script>


<style type="text/scss" scoped>
.nav{height: 1rem;margin-top: .28rem;border-bottom: .01rem solid #CFCFCF}
.nav ul li:nth-child(1){float: left;margin-left: .32rem;margin-top: .44rem;}
.nav ul li:nth-child(2){float: right;margin-right: .24rem;margin-top: .34rem;}
.detail-header{}
.detail-header .title{font-size: .36rem;color: #333333;margin-left: .24rem;margin-top: .26rem;}
.look{font-size: .26rem;color: #999999;position: relative; margin: .04rem 0 .04rem .24rem;}
.look img{width: .32rem;height: .32rem;display: inline-block;}
.look span{color: #999999;font-size: .26rem;position: absolute;left: .44rem;top: -.02rem;}
.detail-main{padding: 0 .25rem;margin-bottom: .74rem;text-align: left;color: #333333;font-size: .3rem;line-height: .54rem;}
/* .detail-main p{text-align: left;color: #333333;font-size: .3rem;line-height: .54rem;} */
.detail-main img{width: 7.02rem;height: 100%;margin-top: .34rem;margin-bottom: .26rem;}

.icon-share{ width: .46rem; height: .46rem; background: url("../../assets/img/bbcdetail/share@3x.png");background-size: 100% 100%;display: inline-block; }
.icon-browse{ width: .32rem; height: .32rem; background: url("../../assets/img/bbcdetail/liulan1@3x.png");background-size: 100% 100%;display: inline-block; }
.icon-back{ width: .14rem; height: .24rem; background: url("../../assets/img/bbcdetail/-s-jiantou_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;transform: rotateY(180deg) }
 
 /*分享模块*/
  .footer-share-modules{position: fixed;bottom: 0;width: 100%;height: 4.36rem;background-color: #F6F6F6;z-index: 999}
  .footer-title-modules{height: .8rem;position: relative;margin-top: .2rem}
  .footer-title-modules:after{content: "";height: 1px;background-color: #909090;width: 3.63rem;position: absolute;left: 0;right: 0;;margin: auto;
    z-index: 9;top: 0;bottom: 0}
  .footer-title-modules p{position: absolute;left: 0;right: 0;margin: auto;width: 2.5rem;z-index: 99;line-height: .8rem;
    background-color: #F6F6F6;text-align: center;color: #909090;font-size: .32rem}
  .footer-share-modules li{float: left;width: calc(100% / 4);text-align: center;position: relative}
  .footer-share-modules li p{width: 100%;text-align: center;top: .8rem;position: absolute}
  .footer-share-modules li:nth-child(1) img{width: .64rem;display: inline-block}
  .footer-share-modules li:nth-child(2) img{width: .58rem;display: inline-block}
  .footer-share-modules li:nth-child(3) img{width: .52rem;display: inline-block}
  .footer-share-modules li:nth-child(4) img{width: .59rem;display: inline-block}
  .footer-share-modules ul{margin-top: .87rem}
  .share-footer-button{position: absolute;bottom: 0;width: 100%;line-height: .85rem;text-align: center;color: #FC858F;font-size: .3rem;background-color: white;font-weight: bold}

</style>

