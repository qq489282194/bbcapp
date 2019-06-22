<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="closeHtml()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">C米专区</span>
        <a @click="MixinToUrl('cmi-rule')" class="icon-right-a">
          <i class="icon-tan"></i>
        </a>
      </div>
    </header>

    <div class="bbc-index">

      <div class="cmi-header-modules">
        <div class="sign-modules">
          <button class="sign-in-button">
            <img src="../../assets/img/cmi/check.png"/>
            <p @click="addSignFun()" v-show="!isSign">点我签到</p>
            <p v-show="isSign">已签到</p>
          </button>
        </div>
        <span class="left">连续签到{{isSignNumber}}天</span>
        <span class="right">{{userList.integral}}<img src="../../assets/img/cmi/cmi.png"/></span>
      </div>

      <ul class="datetime-modules clear-both">
        <li v-for="(item,index) in dateList">
          <!--<div v-if="isAgoActive(index,item.active) == 1">-->
            <!--<div class="datetime-radius">+{{item.cmi}}</div>-->
            <!--<p>{{item.date}}</p>-->
          <!--</div>-->
          <!--<div v-if="isAgoActive(index,item.active) == 2" class="active">-->
            <!--<div class="datetime-radius">+{{item.cmi}}</div>-->
            <!--<p>{{item.date}}</p>-->
          <!--</div>-->
          <div :class="item.active">
            <div class="datetime-radius">+{{item.cmi}}</div>
            <p>{{item.date}}</p>
          </div>
        </li>
        <!--<li class="active ago"><div class="datetime-radius">+1</div><p>1.11</p></li>-->
        <!--<li class="active"><div class="datetime-radius">+1</div><p>昨天</p></li>-->
        <!--<li><div class="datetime-radius">+1</div><p>今天</p></li>-->
        <!--<li><div class="datetime-radius">+1</div><p>明天</p></li>-->
        <!--<li><div class="datetime-radius">+1</div><p>1.15</p></li>-->
        <!--<li><div class="datetime-radius">+1</div><p>1.16</p></li>-->
        <!--<li><div class="datetime-radius">+1</div><p>1.17</p></li>-->
      </ul>

      <div class="cmi-common-modules">
        <div class="cmi-common-title">赚C米</div>
        <ul class="clear-both">
          <li v-show="isShow" @click="MixinToUrl('cmi-invite')"><img src="../../assets/img/cmi/5.png"><p>邀请好友</p></li>
          <li v-show="isShow" @click="MixinToUrl('cmi-mission')"><img src="../../assets/img/cmi/6.png"><p>每日赚C米</p></li>
          <li v-show="isShow" @click="MIXINToDetail('','23')"><img src="../../assets/img/cmi/4.png"><p>购物送C米</p></li>
        </ul>
      </div>

      <div class="cmi-common-modules">
        <div class="cmi-common-title red">花C米</div>
        <ul class="clear-both">
          <!--<li><img src="../../assets/img/cmi/3.png"><p>换好礼</p></li>-->
          <!-- <li v-show="isShow" @click="toCmiAward()"><img src="../../assets/img/cmi/2.png"><p>抽大奖</p></li> -->
          <li v-show="isShow" @click="MIXINToDetail('','18')"><img src="../../assets/img/cmi/1.png"><p>C米当钱用</p></li>
          <li v-show="isShow" @click="MixinToUrl('cmi-ticket')"><img src="../../assets/img/cmi/12.png"><p>C米换票</p></li>
          <li v-show="isShow" @click="toGive()"><img src="../../assets/img/cmi/13.png"><p>C米转赠</p></li>
          <li v-show="isShow" @click="MIXINToDetail('','25')"><img src="../../assets/img/cmi/16.png"><p>C米打赏</p></li>
        </ul>
      </div>


    </div>


    <div v-show="isTipCmi" class="common-shadow-modules">
      <div class="tip-cmi-modules">
        <img src="../../assets/img/cmi/cmi1.png"/>
        <span><b>+{{integral}}</b>C米</span>
      </div>

    </div>


  </div>
</template>

<script>

  import * as USER_API from '@/api/user'
  import * as USER_API1 from '@/api/user1'
  import store from "@/store/index"

  export default {
    name: "index",
    mounted(){
      if(this.userId != ""){
        this.loadIsSigned();
        this.loadUser();
      }
    },
    data(){
      return{
        isShow:true,
        isSign:false,
        dateList:[],
        searchDateList:[],
        userList:{},
        isSignNumber:"",
        isCheck:true,
        integral:1,
        isTipCmi:false,
      }
    },
    computed:{
      userId(){
        return store.state.userId
      },
    },
    watch: {
      userId (val) {
        this.loadIsSigned();
        this.loadUser();
      },
    },
    methods:{
      toGive(){
        let params = {cmNum:"",phone:"",sendPeopleId:store.state.userId};
        store.commit('changeGiveForm',params);
        this.MixinToUrl('cmi-give');
      },
      toCmiAward(){
        let url = 'http://activity.meibbc.com/team-packer/activityCenter.html#/drawindex?userId='+this.userId+'&activityId=2&close=2';
        this.MIXINToDetail(url,'24')
      },
      loadIsSigned(){
        let time = this.MIXINYearMonthDate();
        let params={"userId":this.userId,"time":time}
        USER_API1.isSigned(params).then(data=>{
          console.log(data)
          this.dateList = []
          if(data.status == 1){
            this.isSign = true;
            this.isSignNumber = data.data;
          }else{
            this.isSignNumber =  data.data;
            this.isSign = false;
          }
          this.loadDate(this.isSignNumber,this.isSign);
        })
      },
      loadUser(){
        let userId = this.userId;
        USER_API.findUserByUserid(userId).then(data => {
          this.userList = data;
        });
      },

      loadDate(isSignNumber,status){
        // let isSignNumber = this.isSignNumber % 7;
        // let dateList = this.dateList;
        // let searchDateList = this.searchDateList;
        // let number = 0 - Number(isSignNumber) ;
        // let cmi = 1;
        // let cmiList = (this.isSignNumber) - 1;
        // if(cmiList < 1){
        //   cmiList = 1;
        //   number = -1;
        // }
        // let cmiData = cmiList % 7;
        // for(let i =0;i<7;i++){
        //   number = number + 1;
        //   let cmiData = cmiList % 7;
        //   let date = this.MIXINMonthDate(number);
        //   let date1 = this.MIXINYearMonthDate(number);
        //   let active = "";
        //   if(i < isSignNumber){
        //     active = "active";
        //   }
        //   cmi = this.returnCmi(cmiData,(this.isSignNumber) - 1);
        //   date = this.returnDate(date,isSignNumber,i);
        //   cmiList = Number(cmiList) + 1;
        //   let params = {"date":date,"active":active,"cmi":cmi};
        //   dateList.push(params);
        //   searchDateList.push(date1);
        // }
        isSignNumber = isSignNumber % 7;
        let max = Number(isSignNumber) + 0;
        let maxNumber = -max;
        let min = 7 - Number(isSignNumber);
        let minNumber = 0;
        let dateList = [];
        let cmiNumber = 0;
        let active = "";
        let time = "";
        if(status){
          this.dateList = this.isTodayTrue(max,maxNumber,min,minNumber,cmiNumber,active,time,status);
        }else{
          this.dateList = this.isTodayCmi(max,maxNumber,min,minNumber,cmiNumber,active,time,status);
        }
      },
      isTodayTrue(max,maxNumber,min,minNumber,cmiNumber,active,time){
        let dateList = [];
        let dataTime = ['1天','2天','3天','4天','5天','6天','7天'];
        let dataNumber = 0;
        for(let i=0;i<max;i++){
          cmiNumber++;
          if(max == 1){
            active = 'active';
            // time = "今天"
            time = this.MIXINMonthDate(maxNumber)
          }else if(max>1){
            if(i == (max -1)){
              active = 'active';
              // time = "今天"
              time = this.MIXINMonthDate(maxNumber)
            }else if(i == (max -2)){
              active = 'active ago';
              // time = "昨天"
              time = this.MIXINMonthDate(maxNumber)
            }else{
              active = 'active ago';
              time = this.MIXINMonthDate(maxNumber)
            }
          }
          let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
          maxNumber++;
          dataNumber++;
          dateList.push(params);
        }
        for(let i=0;i<min;i++){
          if(max > 0){
            if(i == 0){
              // time = "明天"
              time = this.MIXINMonthDate(maxNumber)
            }else{
              time = this.MIXINMonthDate(minNumber)
            }
          }
          cmiNumber++;
          if(i == 0){
            if(status){
              active = 'active'
            }else{
              active = ''
            }
          }else{
            active = "";
          }
          let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
          minNumber++;
          dataNumber++;
          dateList.push(params);
        }
        return dateList;
      },

      isTodayCmi(max,maxNumber,min,minNumber,cmiNumber,active,time){
        let dateList = [];
        let dataTime = ['1天','2天','3天','4天','5天','6天','7天'];
        let dataNumber = 0;
        for(let i=0;i<max;i++){
          active = 'active ago';
          cmiNumber++;
          if(max == 1){
            // time = "昨天"
            time = this.MIXINMonthDate(minNumber)
          }else if(max>1){
            if(i == (max -1)){
              // time = "昨天"
              time = this.MIXINMonthDate(minNumber)
            }else{
              time = this.MIXINMonthDate(maxNumber)
            }
          }
          let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
          dataNumber++;
          maxNumber++;
          dateList.push(params);
        }
        for(let i=0;i<min;i++){
          if(max == 0 || max == 1){
            if(i == 0){
              // time = "今天"
              time = this.MIXINMonthDate(minNumber)
            }else if(i == 1){
              // time = "明天"
              time = this.MIXINMonthDate(minNumber)
            }else{
              time = this.MIXINMonthDate(minNumber)
            }
          }else if(max > 1){
            if(i == 0){
              // time = "今天"
              time = this.MIXINMonthDate(minNumber)
            }else if(i == 1){
              // time = "明天"
              time = this.MIXINMonthDate(minNumber)
            }else{
              time = this.MIXINMonthDate(minNumber)
            }
          }
          cmiNumber++;
          if(i == 0){
            if(status){
              active = 'active'
            }else{
              active = ''
            }
          }else{
            active = "";
          }
          let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
          dataNumber++;
          minNumber++;
          dateList.push(params);
        }
        return dateList;
      },

      returnCmi(cmiData){
        let cmi = 10;
        if( cmiData > 0&& cmiData <= 1){
          cmi = 10;
        }else if(cmiData > 1 && cmiData <=2){
          cmi = 15
        }else if(cmiData > 2 && cmiData <=3){
          cmi = 20
        }else if(cmiData > 3 && cmiData <=4){
          cmi = 25
        }else if(cmiData > 4 && cmiData <=5){
          cmi = 30
        }else if(cmiData > 5 && cmiData <=6){
          cmi = 40
        }else if(cmiData > 6 && cmiData <= 7){
          cmi = 50
        }
        return cmi
      },

      isAgoActive(index,type){
        let searchDateList = this.searchDateList[index];
        let data = new Date(this.MIXINYearMonthDate());
        let data1 = new Date(searchDateList);
        let flag = 1;
        if(type == "active"){
          flag = 2;
          if(data > data1){
            flag = 3;
          }
        }
        return flag;
      },

      addSignFun(){
        if(this.isCheck){
          this.isCheck = false;
          let params={"userid":this.userId};
          const self = this
          USER_API.addsignlog(params).then(data=>{
            this.isCheck = true;
            if(data){
              this.integral = data.integral;
              this.isTipCmi = true;
              setTimeout(function () {
                self.isTipCmi = false;
              },1500)
              this.loadIsSigned();
              this.loadUser();
            }else{
              this.systemTip("用户已签到");
            }
          })
        }

      },

    }
  }
</script>

<style scoped>
  @import "../../assets/css/cmi/index.css";
  header .icon-left{background: url("../../assets/img/left.png");background-size: 100% 100%}
  header .header-title{color: white}
  .tip-cmi-modules{position: fixed;left: 0;right: 0;bottom: 0;top: 0;margin: auto;height: 1rem}
  .common-shadow-modules img{width: .82rem;display: block;margin: auto}
  .common-shadow-modules span{position: absolute;right: 2rem;color: white;top:.3rem;font-size: .24rem;}
  .common-shadow-modules b{font-weight: bold;font-size: .3rem;color: #FBD904;margin-right: .1rem}
</style>
