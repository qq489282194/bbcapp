<template>
  <div class="body">
    <header>
        <div class="headerback">
            <img src="../../assets/img/wallet/xiantiao@3x.png" alt="">
        </div>
        <div class="header-div">
                <a @click="backRouter()" class="icon-left-a">
            <i class="icon-left"></i>
            </a>
            <span class="header-titles">我的钱包</span>
            <!-- <a @click="isShare = true" class="icon-right-a">
            <i class="icon-share"></i>
            </a> -->
        </div>
        
        

        <div class="option">
            <ul class="option-nav">
                <li><p :class="style == 0 ? 'active' : ''" @click="option('cmi')">我的C米</p></li>
                <li><p :class="style == 1 ? 'active' : ''" @click="option('integral')">我的积分</p></li>
            </ul>
            <div class="mycmi"  v-if="style == 0">
                <p>5869</p>
                <span>可用C米</span>
                <div class="signcmi">
                    <i class="icon-signcmi"></i>
                    <p>签到领C米</p>
                </div>
                </div>
            <div class="myintegral" v-else>
                <div><p class="fz30">1,300.12</p><p>可用积分</p></div>
                <ul class="integral-detail">
                    <li>
                        <p class="fz23">5,000.12</p>
                        <p>获得积分</p>
                    </li>
                    <li>
                        <p class="fz23">6,300.00</p>
                        <p>总积分</p>
                    </li>
                </ul>
                <div class="signcmi">
                    <i class="icon-integral"></i>
                    <p>积分兑换</p>
                </div>
            </div>
        </div>
        <p style="height:.01rem;"></p>
    </header>
    

    <div class="integral-bottom" v-if="style == 1">
        <ul class="integral">
            <li>
                <p>积分明细</p>
                <i class="icon-right"></i>
            </li>
            <li>
                <p>银行卡</p>
                <i class="icon-right"></i>
            </li>
            <li>
                <p>积分领取</p>
                <i class="icon-right"></i>
            </li>
        </ul>

        <!-- <button>积分兑换</button> -->
    </div>

    <div class="cmi-bottom" v-else-if="style == 0">
        <div class="make">
            <ul class="make-one">
                <li class="make-title">
                    <i class="icon-mark"></i>
                    <p>赚C米</p>
                </li>
                <li>
                    <i class="icon-invite"></i>
                    <p>邀请好友</p>
                </li>
                <li>
                    <i class="icon-gaincmi"></i>
                    <p>每日赚C米</p>
                </li>
                <li>
                    <i class="icon-givecmi"></i>
                    <p>购物送C米</p>
                </li>
            </ul>
            <ul>
                <li class="make-title">
                    <i class="icon-mark"></i>
                    <p>花C米</p>
                </li>
                <li>
                    <i class="icon-trade"></i>
                    <p>换好礼</p>
                </li>
                <li>
                    <i class="icon-award"></i>
                    <p>抽大奖</p>
                </li>
                <li>
                    <i class="icon-cmimoney"></i>
                    <p>C米当钱用</p>
                </li>
            </ul>
            <p class="clear"></p>
        </div>
        <p style="height:.16rem;background:#f2f2f2;"></p>
        <div class="cmi-title">
            <p>C米明细</p>
            <div class="month">
                <span>本月</span>
                <i class="icon-oar"></i>
            </div>
            <div class="alltime" v-for="(item,index) in alltime" :key="index">
                <p>{{item.label}}</p>
                <!-- <p>全部</p>
                <p>一周</p>
                <p>本月</p>
                <p>三月</p>
                <p>半年</p>
                <p>一年</p> -->
            </div>
        </div>
        <div class="cmi-record">
            <ul>
                <li>
                    <div>
                        <p>签到奖励</p>
                    </div>
                    <div class="addnum">
                        <p>2019-05-26 10:20:25</p>
                        <p>+5</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>购物奖励</p>
                    </div>
                    <div class="addnum">
                        <p>2019-05-26 10:20:25</p>
                        <p>+256</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>购物消耗</p>
                    </div>
                    <div class="addnum">
                        <p>2019-05-26 10:20:25</p>
                        <p>+256</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>签到奖励</p>
                    </div>
                    <div class="addnum">
                        <p>2019-05-26 10:20:25</p>
                        <p>+50</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

  </div>
</template>

<script>

  import * as USER_API from '@/api/user'
  import store from "@/store/index"
  import { debug, debuglog } from 'util';

  export default {
    name: "invite",
    data(){
      return{
        userId:store.state.userId,
        isShare:false,
        style:0,
        dataList:{
          shareNum:0,
          isValidNum:0,
          integral:0
        },
        alltime:[
            {value:0,label:'全部'},
            {value:1,label:'一周'},
            {value:2,label:'半月'},
            {value:3,label:'三月'},
            {value:4,label:'半年'},
            {value:5,label:'一年'},
        ]
      }
    },
    mounted(){
      this.loadCmi();
      if(this.$route.query == 'integral'){
          this.style = 1
      }else{
          this.style = 0
      }
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
      option(val){
        if(val == 'cmi'){
            this.style = 0
        }else if(val == 'integral'){
            this.style = 1
        }
      },
    },
  }
</script>

<style scoped>
  .body{background: #f2f2f2}
  header{background: linear-gradient(#F63B75,#FFEDF3);position: relative;}
  .headerback{height: 2.72rem;width: 100%;position: absolute;top: .13rem;z-index: -1;}
  .header-div{height: .36rem;line-height: .36rem;}
  .header-div .header-titles{color: white;font-size: .36rem;margin-right: 1.6rem;}
  .icon-share{position: relative;z-index: 9}
  header span{color: black}
  header .icon-left{background: url("../../assets/img/left.png");background-size: 100% 100%;margin-top: 0;width: .16rem;height: .26rem;margin-left: .32rem;}
  .invite-bg{width: 7.3rem;height: 1.8rem;margin: auto}
  .invite-ul{padding-bottom: .47rem;border-bottom: 10px solid #F2F2F2}
  .invite-ul li{float: left;width: calc(100% / 3);text-align: center;margin-top: .46rem}
  .invite-ul li p:nth-child(1){color: #333333;font-size: .36rem}
  .invite-ul li p:nth-child(2){color: #333333;font-size: .26rem;margin-top: .15rem}
  h5{padding: 0 .34rem;color: #333333;font-size: .32rem;margin: .43rem 0}
  .invite-p{color: #333333;font-size: .28rem;padding: 0 .35rem;margin-bottom: .3rem;text-align: justify}
  .icon-share{float: right;width: .35rem;height: .35rem;display: block;background: url("../../assets/img/cmi/share.png");
    background-size: 100% 100%;margin-right: .38rem;margin-top: .2rem}

  /* 选项模块 */
  .option{color: white;margin-top: .7rem;}
  .option-nav{margin-left:1.82rem;font-size: 0.32rem;margin-bottom: .5rem;height: .42rem;}
  .option-nav li:nth-child(1){float: left;}
  .option-nav li:nth-child(2){margin-left: 1.46rem;float: left;}
  .option .mycmi{position: relative;clear: both;text-align: center;font-size: 0.28rem;height: 2.6rem;width: 7.02rem;border-radius: .2rem;background: white;margin-left: .24rem;margin-bottom: .26rem;}
  .option .mycmi>p{font-size: .7rem;color: #F63B75;font-weight: Bold;padding-top: .6rem;}
  .option .mycmi span{font-size: 0.26rem;color: #999999;}
  .option .mycmi button{background: #169bd5;position: absolute;padding: 0.1rem;color: white;border-radius: 5px;right: .5rem}
  .option .signcmi{height: .56rem;width:1.9rem;font-size: .24rem;color: white;background: #F63B75;line-height: .56rem;position: absolute;top: .24rem;right: 0;border-radius: .4rem 0 0 .4rem;}
  .option .signcmi p{display: inline-block;position: absolute;left: .64rem;}
  .option .myintegral{clear: both;text-align: center;padding: 0;font-size: 0.26rem;padding-bottom: 1.8rem;height: 3.34rem;width: 7.02rem;background: white;margin-left: .24rem;margin-bottom: .26rem;border-radius: .2rem;color: #999999;position: relative;}
  .option .myintegral .signcmi{width: 1.68rem;}
  .option .myintegral .signcmi p{right: .18rem;left: .54rem;}
  .option .integral-detail{margin-left: .92rem;}
  .option .integral-detail li{float: left;}
  .option .integral-detail li:nth-child(1){margin-right: 1.54rem;}
  /* .option .integral-detail li p:nth-child(1){font-size: 0.46rem;} */

  /* 积分明细 */
  .integral-bottom{background: white;}
  .integral-bottom .integral li{background: white;height: 0.96rem;text-align: left;margin-left: .4rem;margin-right: .24rem;line-height: 0.96rem;font-size: 0.32rem;border-top: .01rem solid #e5e5e5;}
  .integral-bottom .integral li p{display: inline-block}
  .integral-bottom .integral li:nth-child(1){border-top:none;}
  .integral-bottom button{height: 0.8rem;background: #ff81ab;color: white;line-height: 0.8rem;text-align: center;font-size: 0.28rem;border-radius: .1rem;padding: 0 0.8rem;position: absolute;bottom: -5rem;left: 50%;transform: translateX(-50%);}

  /* C米明细 */
  .cmi-bottom{background: white;}
  /* .cmi-bottom .make{margin: .2rem 0} */
  .cmi-bottom .make{padding-bottom: .32rem;}
  .cmi-bottom .make p{margin-top: .1rem;color: #333333;}
  .cmi-bottom .make ul li{float: left;text-align: center;width: calc(90% / 4);margin-top: .32rem;}
  .cmi-bottom .make .make-title{margin-top: .6rem;margin-left: .4rem;font-size: .32rem;}
  .cmi-bottom .make .make-title P{display: inline-block}
  .cmi-bottom .cmi-title{position: relative;;height: 1rem;line-height: 1rem;margin-left:.24rem;border-bottom: .01rem solid #e5e5e5;color: #333333;}
  .cmi-bottom .cmi-title>p{font-size: .34rem;font-weight: bold;}
  .cmi-bottom .cmi-title .month{position: absolute;border-radius: .3rem;border: 1px solid #999999;right: .24rem;top: .25rem;height: .48rem;padding: 0 .3rem;line-height: .48rem;font-size: .26rem;color: #999999;padding-right: .4rem;}
  .cmi-bottom .cmi-title .alltime{width: 1.18rem;border: 0.01rem solid #999999;border-radius: .24rem;padding: 0 .34rem;color: #999999;position: absolute;top: .78rem;right:.28rem;background: white;z-index: 1;padding-bottom: .38rem;}
  .cmi-bottom .cmi-title .alltime p{height: .42rem;}
  .cmi-bottom .cmi-title .alltime p:nth-child(1){margin-top: -.2rem;}
  .cmi-bottom .cmi-record{position: relative;}
  .cmi-bottom .cmi-record .addnum{float: right;margin-right: .26rem;text-align: right;}
  .cmi-bottom .addnum p{height: .18rem;margin-bottom: .2rem;}
  .cmi-bottom .addnum p:nth-child(1){margin-top: -.2rem;}
  .cmi-bottom .addnum p:nth-child(2){font-size: .32rem;color: #F63B75;font-weight: bold;}
  .cmi-bottom .cmi-record div:nth-child(1){display: inline-block;font-size: .28rem;color: #333333;}
  .cmi-bottom .cmi-record ul{margin-left: .3rem;}
  .cmi-bottom .cmi-record ul li{height: 1.08rem;color: #999999;line-height: 1.08rem;border-bottom: .01rem solid #e5e5e5;}

    /* 公共样式 */
  .fz30{font-size: 0.60rem;color: #F63B75;font-weight: bold;padding-top: .8rem;}
  .fz23{font-size: 0.46rem;color: #F63B75;}
  .clear{clear: both;}
  .icon-right{background: url("../../assets/img/left.png");background-size: 100% 100%;margin-top: .37rem;width: .12rem;height: .22rem;margin-right: .18rem;float: right;}
  .icon-signcmi{ width: .32rem; height: .32rem; background: url("../../assets/img/wallet/qiandao_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;position: absolute;left: .2rem;top: .12rem; }
  .icon-integral{ width: .38rem; height: .38rem; background: url("../../assets/img/wallet/qiandao_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;position: absolute;left: .1rem;top: .08rem; }
  .icon-mark{ width: .18rem; height: .18rem; background: url("../../assets/img/wallet/0_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-invite{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/yqhy@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-gaincmi{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/mrzcm_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-givecmi{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/gwscm_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-trade{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/hhl_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-award{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/cdj_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-cmimoney{ width: .66rem; height: .66rem; background: url("../../assets/img/wallet/cmdqy_qb_icon@3x.png");background-size: 100% 100%;display: inline-block; }
  .icon-oar{ width: .14rem; height: .08rem; background: url("../../assets/img/wallet/xialajiantou_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;position: absolute;right: .2rem;top: .2rem; }
 
  .active{border-bottom: .06rem solid #910530;padding-bottom: .08rem;color: #910530}

</style>
