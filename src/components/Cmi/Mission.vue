<template>
  <div>
    <header>
      <div class="header-div">
        <a v-show="type != 1" @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <a v-show="type == 1" @click="closeHtml()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <!--<a v-show="type != 1" @click="backRouter()" class="icon-left"></a>-->
        <!--<a v-show="type == 1" @click="closeHtml()" class="icon-left"></a>-->
        <span class="header-title">C米任务</span>
        <a class="icon-share"></a>
      </div>
    </header>

    <div class="bbc-index">

      <div class="banner-modules">
        <img src="../../assets/img/cmi/banner.png"/>
      </div>

      <ul class="mission-ul">
        <li v-show="item.cmTaskId != 8 && item.cmTaskId != 9 && !(item.cmTaskId == 1 && item.isShow == 0)" v-for="item in missionList" class="clear-both">
          <img v-if="item.cmTaskId == 1" src="../../assets/img/cmi/7.png"/>
          <img v-if="item.cmTaskId == 2" src="../../assets/img/cmi/9.png"/>
          <img v-if="item.cmTaskId == 3" src="../../assets/img/cmi/11.png"/>
          <img v-if="item.cmTaskId == 4" src="../../assets/img/cmi/10.png"/>
          <img v-if="item.cmTaskId == 5" src="../../assets/img/cmi/8.png"/>
          <img v-if="item.cmTaskId == 6" src="../../assets/img/cmi/8.png"/>
          <img v-if="item.cmTaskId == 7" src="../../assets/img/cmi/8.png"/>
          <img v-if="item.cmTaskId == 11" src="../../assets/img/cmi/18.png"/>
          <img v-if="item.cmTaskId == 12" src="../../assets/img/cmi/17.png"/>
          <div class="mission-message">
            <p>{{item.name}}
              <span style="color: #CFCFCF;font-size: .3rem" v-if="item.cmTaskId == 3">(每日10次)</span>
              <span style="color: #CFCFCF;font-size: .3rem" v-else-if="item.cmTaskId == 4 || item.cmTaskId == 5">(每日5次)</span>
            </p>
            <p>+{{item.integral}} C 米</p>
          </div>
          <button v-if="item.cmTaskId == 1 && item.isShow == 2" @click="MIXINToDetail(item.cmTaskId,'21')">去赚C米</button>
          <button v-if="(item.cmTaskId == 2 && item.isShow == 2) || (item.cmTaskId == 2 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'22')">去赚C米</button>
          <button v-if="(item.cmTaskId == 3 && item.isShow == 2) || (item.cmTaskId == 3 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'25')">去赚C米</button>
          <button v-if="(item.cmTaskId == 4 && item.isShow == 2) || (item.cmTaskId == 4 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'26')">去赚C米</button>
          <button v-if="(item.cmTaskId == 5 && item.isShow == 2) || (item.cmTaskId == 5 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'28')">去赚C米</button>
          <button v-if="(item.cmTaskId == 6 && item.isShow == 2) || (item.cmTaskId == 6 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'27')">去赚C米</button>
          <button v-if="(item.cmTaskId == 7 && item.isShow == 2) || (item.cmTaskId == 7 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'29')">去赚C米</button>
          <button v-if="(item.cmTaskId == 11 && item.isShow == 2) || (item.cmTaskId == 11 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'25')">去赚C米</button>
          <button v-if="(item.cmTaskId == 12 && item.isShow == 2) || (item.cmTaskId == 12 && item.isShow == 1)" @click="MIXINToDetail(item.cmTaskId,'25')">去赚C米</button>
          <button @click="getCmiFun(item.cmTaskId,item.name,item.integral)" v-if="item.isShow == 1 && item.cmTaskId == 1">领取奖励</button>
          <button style="background-color: #E5E5E5;color: white" v-if="item.isShow == 0">明天再来</button>
          <!--<button style="background-color: #E5E5E5;color: white" v-else-if="item.isShow == 1 && item.cmTaskId!=1">明天再来</button>-->
        </li>
        <!--<li class="clear-both">-->
          <!--<img src="../../assets/img/cmi/9.png"/>-->
          <!--<div class="mission-message">-->
            <!--<p>发表文章</p>-->
            <!--<p>+2 C 米</p>-->
          <!--</div>-->
          <!--<button @click="MIXINToDetail('','22')">去赚C米</button>-->
        <!--</li>-->
        <!--<li class="clear-both">-->
          <!--<img src="../../assets/img/cmi/11.png"/>-->
          <!--<div class="mission-message">-->
            <!--<p>文章点赞</p>-->
            <!--<p>+1 C 米</p>-->
          <!--</div>-->
          <!--<button @click="MIXINToDetail('','22')">去赚C米</button>-->
        <!--</li>-->
        <!--<li class="clear-both">-->
          <!--<img src="../../assets/img/cmi/10.png"/>-->
          <!--<div class="mission-message">-->
            <!--<p>分享文章</p>-->
            <!--<p>+1 C 米</p>-->
          <!--</div>-->
          <!--<button @click="MIXINToDetail('','22')">去赚C米</button>-->
        <!--</li>-->
        <!--<li class="clear-both">-->
          <!--<img src="../../assets/img/cmi/8.png"/>-->
          <!--<div class="mission-message">-->
            <!--<p>去答题</p>-->
            <!--<p>+2 C 米</p>-->
          <!--</div>-->
          <!--<button @click="MIXINToDetail('','4')">去赚C米</button>-->
        <!--</li>-->
      </ul>

      <div class="common-shadow-modules" v-show="isGet">
        <div class="get-modules">
          <div class="get-bg">
            <img src="../../assets/img/cmi/cmi1.png"/>
            <p><b>+</b><span>{{integral}}</span>c米</p>
          </div>
          <h5>恭喜已获得{{name}}{{integral}}C米</h5>
          <h6>继续完成任务可获取更多C米</h6>
          <button class="mission-button" @click="isGet = false">去做任务</button>
          <button class="close-button" @click="isGet = false"></button>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

  import * as USER_API from "@/api/user"
  import store from "@/store/index"

  export default {
    name: "mission",
    data(){
      return{
        userId:store.state.userId,
        missionList:[],
        isGet:false,
        integral:"",
        name:"",
        timer:null,
        type:0,
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
    },
    mounted(){
      let type = this.GetUrlParam("type");
      this.type = type;
      this.loadMission();
      this.timer=setInterval(data => {
        this.loadMission();
      },2000)
    },
    methods:{
      loadMission(){
        // USER_API.getCmTaskList('dc80a6894764442c9311551925903020').then(data => {
        USER_API.getCmTaskList(this.userId).then(data => {
          this.missionList = data;
        })
      },
      getCmiFun(cmTaskId,name,integral){
        let params = {"cmTaskId":cmTaskId,"userId":this.userId,"isvalid":1};
        USER_API.updateCmTaskLog(params).then(data => {
          if(data){
            this.loadMission();
            this.name = name;
            this.integral = integral;
            this.isGet = true;
          }
        })
      },
    },
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .bbc-index{background-color: #F2F2F2;}
  .banner-modules{padding: .13rem 0;background-color: white;}
  .banner-modules img{width: 6.99rem;height: 1.8rem;margin: auto;}
  .mission-ul{margin-top: .16rem}
  .mission-ul li{height: 1.4rem;background-color: white;padding:0 .31rem;padding-top: .26rem}
  .mission-ul li img{width: .88rem;float: left}
  .mission-message{float: left;margin-left: .26rem}
  .mission-message p:nth-child(1){color: #333333;font-size: .3rem}
  .mission-message p:nth-child(2){color: #333333;font-size: .26rem;margin-top: .15rem;font-weight: bold}
  .mission-ul li button{float: right;width: 1.4rem;height: .52rem;line-height: .52rem;background-color: #FC858F;color: white;
    text-align: center;font-size: .26rem;border-radius: 26px;margin-top: .2rem}
  .mission-ul li+li{border-top: 1px solid #E5E5E5}
  .get-modules{width: 5.2rem;height: 6.42rem;background-color: white;border-radius: 20px;position: fixed;left: 0;right: 0;
    top: 0;bottom: 0;margin: auto}
  .get-bg{background: url("../../assets/img/cmi/bg.png");width: 100%;height: 2.62rem;background-size: 100% 100%}
  .get-bg img{width: .94rem;padding-top: .28rem;margin: auto;}
  .get-bg p{font-size: .34rem;color: white;text-align: center;margin-top: .2rem}
  .get-bg p b{font-weight: bold;color: #FFE020}
  .get-bg p span{font-weight: bold;color: #FFE020;font-size: .6rem}
  .get-modules h5{text-align: center;color: #333333;font-size: .34rem;margin-top: .7rem}
  .get-modules h6{text-align: center;color: #999999;font-size: .26rem;margin-top: .15rem}
  .get-modules .mission-button{width: 3.6rem;height: .78rem;line-height: .78rem;text-align: center;font-size: .32rem;color: white;
    background-color: #F63B75;border-radius: 39px;margin: auto;display: block;margin-top: .62rem;}
  .close-button{background: url("../../assets/img/close.png");width: .48rem;height: .48rem;background-size: 100% 100%;position: absolute;
    left: 0;right: 0;margin: auto;bottom: -1rem}

</style>
