<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">邀请好友赚C米</span>
        <a @click="isShare = true" class="icon-right-a">
          <i class="icon-share"></i>
        </a>
      </div>
    </header>

    <div class="bbc-index">
      <img class="invite-bg" src="../../assets/img/cmi/banner1.png"/>
      <ul class="invite-ul clear-both">
        <li><p>{{dataList.shareNum}}</p><p>已邀好友</p></li>
        <li><p>{{dataList.isValidNum}}</p><p>有效好友</p></li>
        <li><p>{{dataList.integral}}</p><p>已获C米</p></li>
      </ul>

      <h5>如何邀请好友</h5>
      <p class="invite-p">1.老用户通过QQ/微信/朋友圈/微博分享链接给新用户，新用户成功下载并注册，老用户获得20C米，新用户获得10C米</p>
      <p class="invite-p">2.老用户邀请新用户下载注册不设上限</p>
    </div>

    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
    </div>
    <div class="footer-share-modules" v-show="isShare">
      <div class="footer-title-modules">
        <p>邀请好友参与</p>
      </div>
      <ul class="clear-both">
        <li @click="shareFun('weChat',1)">
          <img src="../../assets/img/WeChat@2x.png"/>
          <p>微信邀请</p>
        </li>
        <li @click="shareFun('friendCircle',2)">
          <img src="../../assets/img/CircleofFriends@2x.png"/>
          <p>朋友圈邀请</p>
        </li>
        <li @click="shareFun('qq',3)">
          <img src="../../assets/img/QQ@2x.png"/>
          <p>QQ邀请</p>
        </li>
        <li @click="shareFun('sina',4)">
          <img src="../../assets/img/weibo@2x.png"/>
          <p>微博邀请</p>
        </li>
      </ul>
      <button @click="isShare = false" class="share-footer-button">取消</button>
    </div>




  </div>
</template>

<script>

  import * as USER_API from '@/api/user'
  import store from "@/store/index"

  export default {
    name: "invite",
    data(){
      return{
        userId:store.state.userId,
        isShare:false,
        dataList:{
          shareNum:0,
          isValidNum:0,
          integral:0
        },
      }
    },
    mounted(){
      this.loadCmi();
    },
    methods:{
      loadCmi(){
        USER_API.queryCmShare(this.userId).then(data => {
          if(data){
            this.dataList = data;
          }
        })
      },
      shareFun(type,typeNumber){
        let title = "分享赚C米！大家都在玩！";
        let description = "一起分享吧！";
        let imgSrc = "http://app.meibbc.com/BeautifyBreast/app/share-modules/image/draw/share.png";
        let hostUrl ="http://app.meibbc.com/BeautifyBreast/app/registerv2/register.html?userId="+this.userId;
        let activityId = "";
        this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
      },
    },
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .icon-share{position: relative;z-index: 9}
  header span{color: black}
  header .icon-left{background: url("../../assets/img/back.png");background-size: 100% 100%}
  .invite-bg{width: 7.3rem;height: 1.8rem;margin: auto}
  .invite-ul{padding-bottom: .47rem;border-bottom: 10px solid #F2F2F2}
  .invite-ul li{float: left;width: calc(100% / 3);text-align: center;margin-top: .46rem}
  .invite-ul li p:nth-child(1){color: #333333;font-size: .36rem}
  .invite-ul li p:nth-child(2){color: #333333;font-size: .26rem;margin-top: .15rem}
  h5{padding: 0 .34rem;color: #333333;font-size: .32rem;margin: .43rem 0}
  .invite-p{color: #333333;font-size: .28rem;padding: 0 .35rem;margin-bottom: .3rem;text-align: justify}
  .icon-share{float: right;width: .35rem;height: .35rem;display: block;background: url("../../assets/img/cmi/share.png");
    background-size: 100% 100%;margin-right: .38rem;margin-top: .2rem}

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
