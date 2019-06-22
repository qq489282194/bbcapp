<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="MIXINToDetail('','7')" :class="this.messageNumber >0 ? 'active' : ''">
          <i class="icon icon-message"></i>
        </a>
        <a @click="MIXINToDetail('','3')">
          <i class="icon icon-set"></i>
        </a>
      </div>
    </header>

    <div class="bbc-index">
      <div class="header-modules">
        <div class="header-top clear-both">
          <img @click="MIXINToDetail('','20')" v-if="userList.icon != null && userList.icon != 'null' && userList.icon != ''" class="header-photo" :src="'https://oss.meibbc.com/'+userList.icon"/>
          <img @click="MIXINToDetail('','20')" v-else class="header-photo" src="../../assets/img/user.png"/>
          <div @click="MIXINToDetail('','20')" class="header-message">
            <p v-html="userList.niceName">Why.123</p>
            <p v-show="userId == '' || userId == '(null)'  ">未登录</p>
            <span v-if="userList.role == 1">普通用户</span>
            <span v-if="userList.role == 2">贵宾</span>
            <span v-if="userList.role == 3">铂金</span>
            <span v-if="userList.role == 4">店长</span>
          </div>
          <img @click="MIXINToDetail('','10')" class="header-code" src="../../assets/img/cmi/ma.png"/>
        </div>
        <ul class="header-bottom clear-both">
          <li @click="MIXINToDetail(MIXINGETHost()+'bbc-personal/cmi/detail','24')" >
            <p v-if="userList.integral > 10000" v-html="userList.integral">1W+</p>
            <p v-else v-html="userList.integral">0</p>
            <p>C米</p></li>
          <li @click="MIXINToDetail('','12')">
            <p v-html="selectCount.count">0</p>
            <p>好友</p></li>
          <li @click="MIXINToDetail('','11')">
            <p v-if="countCollect != 0" v-html="countCollect">9814</p>
            <p v-if="countCollect == 0" v-html="countCollect">0</p>
            <p>收藏</p></li>
          <li @click="MIXINToDetail('','5')">
            <p v-if="countCare != 0"  v-html="countCare">1</p>
            <p v-if="countCare == 0"  v-html="countCare">0</p>
            <p>关注</p></li>
        </ul>
      </div>


      <ul class="menu-modules clear-both">
        <li @click="MIXINToDetail('','1')">
          <i class="icon icon-order"></i>
          <!--<i src="../../assets/img/home/order.png"/>-->
          <p>订单</p></li>
        <li @click="MIXINToDetail('','30')">
          <i class="icon icon-shop"></i>
          <!--<img src="../../assets/img/home/after-sales.png"/>-->
          <p>购物车</p></li>
        <li @click="MIXINToDetail('','13')">
          <i class="icon icon-integral"></i>
          <!--<img src="../../assets/img/home/integral.png"/>-->
          <p>积分</p></li>
        <li @click="MIXINToDetail('','4')">
          <i class="icon icon-question"></i>
          <!--<img src="../../assets/img/home/question.png"/>-->
          <p>问答</p></li>
        <li @click="MIXINToDetail('','15')">
          <i class="icon icon-information"></i>
          <!--<img src="../../assets/img/home/information.png"/>-->
          <p>资讯</p></li>

      </ul>

      <!--<div class="banner-modules"></div>-->


      <p class="home-title">我的服务</p>

      <ul class="serve-modules clear-both">
        <!--<li @click="MixinToUrl('cmi-index')">-->
        <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')">-->
        <li @click="MIXINToDetail(MIXINGETHost()+'bbc-personal/cmi/index','24')">
          <!--<img style="width: .44rem" src="../ ../assets/img/home/check.png"/>-->
          <i class="icon icon-check"></i>
          <p>签到领好礼</p>
        </li>
        <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')"><img style="width: .44rem" src="../../assets/img/home/check.png"/><p>签到领好礼</p></li>-->
        <li @click="MIXINToDetail('','17')">
          <i class="icon icon-gift"></i>
          <!--<img style="width: .42rem" src="../../assets/img/home/gift.png"/>-->
          <p>大礼包</p></li>
        <li @click="MIXINToDetail('http://activity.meibbc.com/team-packer/activityCenter.html#/index?isTop=2','24')">
          <i class="icon icon-horn"></i>
          <!--<img style="width: .49rem" src="../../assets/img/home/horn.png"/>-->
          <p>精彩活动</p></li>
        <!--<li><img style="width: .35rem" src="../../assets/img/home/bag.png"/><p>C米换礼</p></li>-->
        <li @click="MIXINToDetail('','19')">
          <i class="icon icon-card"></i>
          <!--<img style="width: .49rem" src="../../assets/img/home/card.png"/>-->
          <p>我的月卡</p></li>
        <li @click="MIXINToDetail('','8')">
          <i class="icon icon-time"></i>
          <!--<img style="width: .51rem" src="../../assets/img/home/time.png"/>-->
          <p>预约中心</p></li>
        <li @click="MIXINToDetail('','9')">
          <i class="icon icon-customerservice"></i>
          <!--<img style="width: .52rem" src="../../assets/img/home/customerservice.png"/>-->
          <p>帮助与客服</p></li>
        <li @click="MIXINToDetail('','6')">
          <i class="icon icon-shouhou"></i>
          <!--<img style="width: .52rem" src="../../assets/img/home/customerservice.png"/>-->
          <p>售后</p></li>
        <li @click="MIXINToDetail('','34')">
          <i class="icon icon-register"></i>
          <!--<img style="width: .52rem" src="../../assets/img/home/customerservice.png"/>-->
          <p>账号注册</p></li>
      </ul>


    </div>
  </div>
</template>

<script>

  import * as USER_API from '@/api/user'
  import * as TAPP_API from '@/api/tapp'
  import store from "@/store/index"

  export default {
    name: "index",
    data(){
      return{
        userList:{
          integral:0,
        },
        selectCount:{
          count:0,
        },
        countCollect:0,
        countCare:0,
        messageNumber:0,
      }
    },
    computed:{
      userId(){
        return store.state.userId
      },
      token(){
        return store.state.token
      },
    },
    watch: {
      userId (val) {
        if(val != '' && val != "(null)" ){
          this.loadUser();
          this.loadSelectCount();
          this.loadMessage();
        }
      },
      token(val){
        if(val != ""){
          this.loadCountCollect();
          this.loadCountCare();
        }
      },
    },
    created(){
      const self = this ;
      window['updateWeb'] = function(){
        if(self.userId != '' && self.userId != "(null)" ){
          self.loadUser();
          self.loadSelectCount();
          self.loadMessage();
        }
        if(self.token != ""){
          self.loadCountCollect();
          self.loadCountCare();
        }
      };
    },
    mounted(){
      console.log(this.MIXINGETHost())
      if(this.userId != '' && this.userId != "(null)" ){
        this.loadUser();
        this.loadSelectCount();
        this.loadMessage();
      }
      if(this.token != ""){
        this.loadCountCollect();
        this.loadCountCare();
      }
    },
    methods:{
      loadMessage(){
        TAPP_API.messageList(this.userId).then(data => {
          if(data){
            this.messageNumber = data.totalUnRead
          }
        })
      },
      loadUser(){
        let userId = this.userId;
        USER_API.findUserByUserid(userId).then(data => {
          if(data){
            if(data == true){
              this.userList = 0;
            }else{
              this.userList = data;
            }
          }
        });
      },
      loadSelectCount(){
        let params = {"endDate":"", "startDate":"", "userId":this.userId,};
        USER_API.selectcount(params).then(data => {
          if(data){
            if(data == true){
              this.selectCount = 0;
            }else{
              this.selectCount = data;
            }
          }
        });
      },
      loadCountCollect(){
        let params = {"token":this.token, "userid":this.userId,};
        USER_API.countCollect(params).then(data => {
          if(data){
            this.countCollect = data;
          }else{
            this.countCollect = 0;
          }

        });
      },
      loadCountCare(){
        USER_API.countCare(this.token).then(data => {
          if(data){
              this.countCare = data;
          }else{
            this.countCare = 0;
          }
        });
      },
    },
  }
</script>

<style  scoped>
  @import "../../assets/css/home/index.css";
</style>

