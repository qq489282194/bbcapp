<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="closeHtml()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">C米明细</span>
      </div>
    </header>

    <div class="bbc-index">

      <div class="banner-modules">
        <p><span>{{userList.integral}}</span><img src="../../assets/img/cmi/cmi.png"/></p>
        <h6>我的C米</h6>
      </div>
      <div class="detail-nav clear-both">
        <span v-html="activeText">本月</span>
        <div @click="isDate = !isDate"><span>筛选</span><i class="icon-triangle"></i>
          <ul v-show="isDate">
            <li :class="active == 0 ? 'active' : '' " @click="changTime(0,'全部')">全部</li>
            <li :class="active == 7 ? 'active' : '' " @click="changTime(7,'一周')">一周</li>
            <li :class="active == 31 ? 'active' : '' " @click="changTime(31,'本月')">本月</li>
            <li :class="active == 93 ? 'active' : '' " @click="changTime(93,'三月')">三月</li>
            <li :class="active == 183 ? 'active' : '' " @click="changTime(183,'半年')">半年</li>
            <li :class="active == 365 ? 'active' : '' " @click="changTime(365,'一年')">一年</li>
          </ul>
        </div>
        <!--<div @click="isType = !isType"><span>全部</span><i class="icon-triangle"></i>-->
          <!--<ul v-show="isType">-->
            <!--<li class="active">全部</li>-->
            <!--<li>已获取</li>-->
            <!--<li>已消耗</li>-->
            <!--<li>已失效</li>-->
          <!--</ul>-->
        <!--</div>-->
      </div>

      <ul class="detail-list">
        <li v-for="item in rowList">
          <img v-if="item.integralruleid == 28 && (item.icon != null && item.icon != '' && item.icon != 'null')" :src="'https://oss.meibbc.com/'+item.icon"/>
          <img v-else-if="item.integralruleid != 28" :src="'https://oss.meibbc.com/'+item.icon"/>
          <img v-else-if="item.integralruleid == 28 && (item.icon == null || item.icon == '' ||  item.icon == 'null')" src="../../assets/img/user.png"/>
          <!--<i v-if="item.integralruleid == 12" class="icon-4"></i>-->
          <!--<i v-else-if="item.integralruleid == 4" class="icon-5"></i>-->
          <!--<i v-else-if="item.integralruleid == 20" class="icon-6"></i>-->
          <!--<i v-else-if="item.integralruleid == 26" class="icon-7"></i>-->
          <!--<i v-else-if="item.integralruleid == 21" class="icon-8"></i>-->
          <!--<i v-else-if="item.integralruleid == 3" class="icon-9"></i>-->
          <!--<i v-else-if="item.integralruleid == 24" class="icon-10"></i>-->
          <!--<i v-else-if="item.integralruleid == 22" class="icon-10"></i>-->
          <!--<i v-else class="icon-4"></i>-->
          <div class="detail-message">
            <p v-html="item.remarks">购买【商品名称】</p>
            <p v-if="item.integralruleid == 12">确认收货后7天内获得</p>
          </div>
          <div class="cmi-detail">
            <span v-if="item.isvalid == 0">+{{item.integral}}</span>
            <span v-if="item.isvalid == 1">-{{item.integral}}</span>
            <img src="../../assets/img/cmi/cmi.png"/>
            <!--<p>已失效</p>-->
          </div>
          <!--<div class="cmi-detail lose">-->
            <!--<span>+5</span>-->
            <!--<img src="../../assets/img/cmi/cmi.png"/>-->
            <!--<p>已失效</p>-->
          <!--</div>-->
        </li>
        <!--<li class="lose">-->
          <!--<i class="icon-share"></i>-->
          <!--<div class="detail-message">-->
            <!--<p>购买【商品名称】</p>-->
            <!--<p>确认收货后7天内获得</p>-->
          <!--</div>-->
          <!--<div class="cmi-detail">-->
          <!--<span>+5</span>-->
          <!--<img src="../../assets/img/cmi/cmi.png"/>-->
          <!--<p>已失效</p>-->
          <!--</div>-->
        <!--</li>-->
      </ul>

    </div>

  </div>
</template>

<script>

  import * as USER_API from "@/api/user"
  import store from "@/store/index"

  export default {
    name: "detail",
    data(){
      return{
        searchForm:{
          userId:store.state.userId,
          // userId:'fff04119e87d40ef8297bb715649bd86',
          startTime:this.MIXINYearMonthDate(-31),
          endTime:this.MIXINYearMonthDate(0),
          pagesize:200,
          page:1,
        },
        active:31,
        dataList:{},
        rowList:[],
        userList:{},
        isType:false,
        isDate:false,
        activeText:"本月"
      }
    },
    computed:{
      userId(){
        return store.state.userId;
      },
    },
    watch: {
      userId (val) {
        this.searchForm.userId = store.state.userId;
        this.loadCmiDetail();
        this.loadUser();
      },
    },
    mounted(){
      if(this.userId != ""){
        this.loadCmiDetail();
        this.loadUser();
      }
    },
    methods:{
      loadUser(){
        let userId = this.searchForm.userId;
        USER_API.findUserByUserid(userId).then(data => {
          this.userList = data;
        });
      },
      changTime(active,text){
        this.activeText = text
        this.active = active;
        if(active == 0){
          this.searchForm.startTime = "";
          this.searchForm.endTime = "";
        }else{
          this.searchForm.endTime = this.MIXINYearMonthDate(0);
          this.searchForm.startTime = this.MIXINYearMonthDate(-active);
        }
        this.loadCmiDetail();
      },
      loadCmiDetail(){
        USER_API.findIntegralList(this.searchForm).then(data=>{
          this.dateList = data;
          this.rowList = data.data;
        })
      },
    },
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .banner-modules{background: url("../../assets/img/cmi/banner2.png");width: 6.86rem;height: 1.2rem;background-size: 100% 100%;
    margin: auto}
  .detail-nav{height: .8rem;line-height: .8rem;border-bottom: 1px solid #E5E5E5;
    padding:0 .33rem;color: #999999;font-size: .3rem;margin-top: .2rem}
  .detail-nav>div{width: 1.65rem;text-align: right;float: right;position: relative}
  .icon-triangle{background: url("../../assets/img/cmi/down.png");background-size: 100% 100%;display: inline-block;width: .26rem;
    height: .14rem;float: right;margin-top: .35rem;margin-left: .1rem;}
  .detail-nav>div>ul{position: absolute;border: 1px solid #E5E5E5;left: .3rem;z-index: 9;background-color: white}
  .detail-nav>div>ul>li{width: 1.64rem;font-size: .26rem;color: #999999;text-align: center;line-height: .6rem}
  .detail-nav>div:nth-child(2)>ul{left: 0}
  .detail-nav>div>ul>li.active{color: #FC858F}
  .detail-list li{height: 1.68rem;padding: .4rem .32rem;border-bottom: 1px solid #E5E5E5}
  .detail-list li>i{height: .88rem;width: .88rem;float: left}
  .detail-list>li .detail-message{margin-left: .41rem;float: left}
  .detail-list>li .detail-message p:nth-child(1){color: #333333;font-size: .32rem}
  .detail-list>li .detail-message p:nth-child(2){color: #333333;font-size: .26rem;margin-top: .1rem}
  .cmi-detail{float: right;color: #FC858F;font-size: .3rem;font-weight: bold;margin-top: .2rem}
  .cmi-detail img{width: .22rem;height: .22rem;float: right;margin-top: .1rem;margin-left: .1rem}
  .cmi-detail p{color: #CFCFCF;font-size: .26rem;margin-top: .28rem}
  .lose .cmi-detail{color: #999999;margin-top: 0}
  .banner-modules p{font-size: .54rem;color: white;font-weight: bold;text-align: center}
  .banner-modules p img{width: .26rem;display: inline-block;margin-left: .1rem}
  .banner-modules h6{text-align: center;font-size: .26rem;opacity: .6}
  li img{width: .88rem;height: .88rem;float: left;border-radius: 50%}
  .icon-4{background: url("../../assets/img/cmi/icon/4.png");background-size: 100% 100%}
  .icon-5{background: url("../../assets/img/cmi/icon/5.png");background-size: 100% 100%}
  .icon-6{background: url("../../assets/img/cmi/icon/6.png");background-size: 100% 100%}
  .icon-7{background: url("../../assets/img/cmi/icon/7.png");background-size: 100% 100%}
  .icon-8{background: url("../../assets/img/cmi/icon/8.png");background-size: 100% 100%}
  .icon-9{background: url("../../assets/img/cmi/icon/9.png");background-size: 100% 100%}
  .icon-10{background: url("../../assets/img/cmi/icon/10.png");background-size: 100% 100%}


</style>
