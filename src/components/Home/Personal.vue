<template>
  <div>
    <header>
      
    </header>

    <div class="bbc-index">
      
      <div class="header-modules">
        <div class="header">
          <div>
            <a @click="MIXINToDetail('','7')" :class="this.messageNumber >0 ? 'active' : ''">
              <i class="icon icon-message"></i>
            </a>
            <a @click="MIXINToDetail('','3')">
              <i class="icon icon-set"></i>
            </a>
          </div>
        </div>
        <div class="header-top clear-both member">
          <img @click="MIXINToDetail('','20')" v-if="userList.icon != null && userList.icon != 'null' && userList.icon != ''" class="header-photo" :src="'https://oss.meibbc.com/'+userList.icon"/>
          <img @click="MIXINToDetail('','20')" v-else class="header-photo" src="../../assets/img/user.png"/>
          <div @click="MIXINToDetail('','20')" class="header-message">
            <p v-html="userList.niceName">Why.123</p>
            <p v-show="userId == '' || userId == '(null)'  ">Darren</p>
            <i class="icon icon-vip"></i>
            <span v-if="userList.role == 1">普通用户</span>
            <span v-if="userList.role == 2">贵宾</span>
            <span v-if="userList.role == 3">铂金</span>
            <span v-if="userList.role == 4">店长</span>
            <!-- <div class="progress">
              <span>等级 v3</span>
              <nut-progress 
                size="small"
                strokeColor='#fff'
                percentage='100'
                textInside='true'
                showText='false'
              >
              </nut-progress>
            </div> -->
            
          </div>
          <div class="sign">
            <p><i class="icon icon-gift"></i></p>
            <p>签到有礼</p>
          </div>
          <!-- <img @click="MIXINToDetail('','10')" class="header-code" src="../../assets/img/cmi/ma.png"/> -->
        </div>
        <ul class="header-bottom clear-both">
          <li @click="MIXINToDetail(MIXINGETHost()+'bbc-personal/cmi/detail','24')" >
            <!-- <p v-if="userList.integral > 10000" v-html="userList.integral">1W+</p> -->
            <p v-html="diaryCount.data">0</p>
            <p>日记</p></li>
          <li @click="MIXINToDetail('','12')">
            <p v-html="personalPage.funs">0</p>
            <p>粉丝</p></li>
          <li @click="MIXINToDetail('','11')">
            <p v-if="countCare != 0" v-html="countCare">9814</p>
            <p v-if="countCare == 0" v-html="countCare">0</p>
            <p>关注</p></li>
          <li @click="MIXINToDetail('','5')">
            <p v-if="selectCount.count != 0"  v-html="selectCount.count">1</p>
            <p v-if="selectCount.count == 0"  v-html="selectCount.count">0</p>
            <p>好友</p></li>
        </ul>
      </div>

      <div class="menu-modules clear-both frame">
        <ul class="">
          <li @click="MIXINToDetail('','1')">
            <i class="icon icon-order"></i>
            <!--<i src="../../assets/img/home/order.png"/>-->
            <p>订单</p></li>
          <li @click="MIXINToDetail('','30')">
            <i class="icon icon-after-sales"></i>
            <!--<img src="../../assets/img/home/after-sales.png"/>-->
            <p>预约</p></li>
          <li @click="MIXINToDetail('','13')">
            <i class="icon icon-money"></i>
            <!--<img src="../../assets/img/home/integral.png"/>-->
            <p>钱包</p></li>
          <li @click="MIXINToDetail('','4')">
            <i class="icon icon-information"></i>
            <!--<img src="../../assets/img/home/question.png"/>-->
            <p>收藏</p></li>
          <li @click="MIXINToDetail('','15')">
            <i class="icon icon-praise"></i>
            <!--<img src="../../assets/img/home/information.png"/>-->
            <p>赞过</p></li>
          <li @click="MIXINToDetail('','15')">
            <i class="icon icon-answers"></i>
            <!--<img src="../../assets/img/home/information.png"/>-->
            <p style="margin-bottom:0;">问答</p></li>
          <li @click="MIXINToDetail('','15')">
            <i class="icon icon-footprint"></i>
            <!--<img src="../../assets/img/home/information.png"/>-->
            <p style="margin-bottom:0;">足迹</p></li>

        </ul>

      </div>
      
      <div class="banner-modules">
        <img :src="pageJumpimg" alt="">
      </div>

      <div class="integral-modules frame">
        <p @click="MixinToUrl('cmi-wallet','integral')">我的积分</p>
        <ul class="numdata">
          <li>
            <p>可用积分</p>
            <p v-if="postUserByUserid.actAalance != 0" v-html="postUserByUserid.actAalance">0.00</p>
            <p v-if="postUserByUserid.actAalance == 0">0.00</p>
          </li>
          <li>
            <p>总积分</p>
            <p v-if="postUserByUserid.actAalance != 0" v-html="postUserByUserid.actAalance + postUserByUserid.frozonaalance">0.00</p>
            <p v-if="postUserByUserid.actAalance == 0">0.00</p>
          </li>
        </ul>
        <ul class="invite">
          <li>
            <i class="icon icon-invite"></i>
            <p>邀请</p>
          </li>
          <li>
            <i class="icon icon-deserve"></i>
            <p>值得推</p>
          </li>
        </ul>
        <p class="clear"></p>
      </div>

      <div class="integral-modules frame">
        <p>会员权益</p>
        <ul class="numdata">
          <li>
            <p>为您节省</p>
            <p><span>￥</span>120</p>
          </li>
        </ul>
        <ul class="member nav">
          <li>
            <i class="icon icon-member"></i>
            <p>我的会员</p>
          </li>
          <li>
            <i class="icon icon-cmishop"></i>
            <p>C米商城</p>
          </li>
          <li>
            <i class="icon icon-month"></i>
            <p>我的月卡</p>
          </li>
          <li>
            <i class="icon icon-upgrade"></i>
            <p>会员升级</p>
          </li>
        </ul>
        <p class="clear"></p>
      </div>

      <div class="frame">
        <p class="home-title">胸密福利</p>

        <ul class="serve-modules clear-both">
          <!--<li @click="MixinToUrl('cmi-index')">-->
          <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')">-->
          <li @click="MIXINToDetail(MIXINGETHost()+'bbc-personal/cmi/index','24')">
            <!--<img style="width: .44rem" src="../ ../assets/img/home/check.png"/>-->
            <i class="icon icon-discounts"></i>
            <p>优惠券</p>
          </li>
          <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')"><img style="width: .44rem" src="../../assets/img/home/check.png"/><p>签到领好礼</p></li>-->
          <li @click="MIXINToDetail('','17')">
            <i class="icon icon-activity"></i>
            <!--<img style="width: .42rem" src="../../assets/img/home/gift.png"/>-->
            <p>精彩活动</p></li>
        </ul>
      </div>

      <div class="frame home-bottom">
        <p class="home-title">常用工具</p>

        <ul class="serve-modules clear-both">
          <!--<li @click="MixinToUrl('cmi-index')">-->
          <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')">-->
          <li @click="MIXINToDetail(MIXINGETHost()+'bbc-personal/cmi/index','24')">
            <!--<img style="width: .44rem" src="../ ../assets/img/home/check.png"/>-->
            <i class="icon icon-code"></i>
            <p>二维码</p>
          </li>
          <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')"><img style="width: .44rem" src="../../assets/img/home/check.png"/><p>签到领好礼</p></li>-->
          <li @click="MIXINToDetail('','17')">
            <i class="icon icon-control"></i>
            <!--<img style="width: .42rem" src="../../assets/img/home/gift.png"/>-->
            <p>胸膜控制器</p></li>
          <li @click="MIXINToDetail('http://activity.meibbc.com/team-packer/activityCenter.html#/index?isTop=2','24')">
            <i class="icon icon-service"></i>
            <!--<img style="width: .49rem" src="../../assets/img/home/horn.png"/>-->
            <p>客服</p></li>
          <!--<li><img style="width: .35rem" src="../../assets/img/home/bag.png"/><p>C米换礼</p></li>-->
          <li @click="MIXINToDetail('','19')">
            <i class="icon icon-after"></i>
            <!--<img style="width: .49rem" src="../../assets/img/home/card.png"/>-->
            <p>售后</p></li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script>

  import * as USER_API from '@/api/user'
  import * as TAPP_API from '@/api/tapp'
  import store from "@/store/index"
import { debug } from 'util';

  export default {
    name: "personal",
    data(){
      return{
        userList:{
          integral:0,
        },
        // 好友
        selectCount:{
          count:0,
        },
        // 粉丝
        personalPage:{
          funs:0
        },
        // 日记
        diaryCount:{
          data:0
        },
        // 积分
        postUserByUserid:{
          // 可用积分
          actAalance:0,
          // 冻结积分
          frozonaalance:0
        },
        countCollect:0,
        // 关注
        countCare:0,
        // banner图
        pageJump:[{
          // 图片地址
          photo_url:'',
          // 跳转地址
          page_jump_url:''
        }],
        pageJumpimg:'',
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
      // banner图
      this.loadPageJump()
      // 我的积分
      this.loadPostUserByUserid()
      // 关注
      this.loadCountCare()
      // 粉丝
      this.loadPersonalPage()
      // 日记
      this.loadDiaryCount()
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
      // 好友
      loadSelectCount(){
        let params = {"endDate":"", "startDate":"", "userId":this.userId,};
        USER_API.selectcount(params).then(data => {
          // if(data){
          //   if(data == true){
          //     this.selectCount = 0;
          //   }else{
          //     this.selectCount = data;
          //   }
          // }
          this.selectCount = data.data;
        });
      },
      // 粉丝
      loadPersonalPage(){
        let params = {"token":this.token, "userId":this.userId, "lookUserId":"",};
        USER_API.personalPage(params).then(data => {
          // debugger
          if(data){
            if(data == true){
              this.personalPage = 0;
            }else{
              this.personalPage = data;
            }
          }
        });
      },
      // 关注
      loadCountCare(){
        let params = {"token":this.token, "userid":this.userId,};
        USER_API.countCare(params).then(data => {
          if(data){
            this.countCare = data;
          }else{
            this.countCare = 0;
          }
        });
      },
      // 日记
      loadDiaryCount(){
        let params = {"token":this.token, "userId":this.userId,};
        USER_API.diaryCount(params).then(data => {
          // debugger
          if(data){
            this.diaryCount = data;
          }else{
            this.diaryCount = 0;
          }
        });
      },
      // 我的积分
      loadPostUserByUserid(){
        let params = {"token":this.token, "userid":this.userId,};
        USER_API.postUserByUserid(params).then(data => {
          debugger
          if(data){
            this.postUserByUserid = data.data;
          }else{
            this.postUserByUserid = 0;
          }
        });
      },
      // banner图
      loadPageJump(){
        let params = { type:6, page_no:1, page_size:10, };
        USER_API.pageJump(params).then(data => {
          // debugger
          this.pageJump = data.data
          // this.pageJumpimg = data.data[0].photo_url
        })
      },
    },
  }
</script>

<style  scoped>
  @import "../../assets/css/home/personal.css";
</style>

