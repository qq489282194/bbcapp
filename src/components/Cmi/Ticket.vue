<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
          <span class="header-title">C米换票</span>
        <a @click="MixinToUrl('cmi-ticket-detail')" class="header-right" style="color: black">兑换记录</a>
      </div>
    </header>

    <div class="bbc-index">
      <div class="cmi-ticket">
        <span>{{dataList.cmTicketPrice}}C米</span>
        <button @click="checkDialogType()" class="promptly-button">
          <p>立即</p>
          <p>兑换</p>
        </button>
      </div>
    </div>

    <div class="common-shadow-modules" v-show="dialogType != 0">
      <div class="common-shadow-modules-div">

        <div class="select-modules" v-show="dialogType == 1">

          <div class="close-share-a">
            <a  @click="dialogType = 0" class="common-close-share-icon"></a>
          </div>
          <h1>兑换数量</h1>
          <div class="select-input">
            <button @click="changeNum(-1)" style="border-top-left-radius: 8px;border-bottom-left-radius: 8px">-</button>
            <!-- <div>{{ruleForm.num}}</div> -->
            <div><input v-model="ruleForm.num" maxlength="3" type="text" @input="check_num" @blur="check_blur"></div>
            <!-- <div><input type="text" @input="NumberCheck(this)" v-model="ruleForm.num"></div> -->
            <button @click="changeNum(1)" style="color: black;border-top-right-radius: 8px;border-bottom-right-radius: 8px">+</button>
          </div>
          <h2 v-if="dataList.cmEveryLimit != 0">tips：每日限兑换{{dataList.cmEveryLimit}}票</h2>
          <button @click="convertFun()" class="select-button">
            确定
          </button>
        </div>

        <div class="tip-modules" v-show="dialogType == 2 || dialogType == 3 || dialogType== 4 || dialogType == 5">
          <div class="close-share-a">
            <a  @click="dialogType = 0" class="common-close-share-icon"></a>
          </div>
          <img v-show="dialogType != 5" src="../../assets/img/cmi/tip.png"/>
          <img v-show="dialogType == 5" src="../../assets/img/cmi/success.png"/>
          <h1 v-show="dialogType == 2">亲，您的C米不足哦~</h1>
          <h1 v-show="dialogType == 4">亲，您今日兑换剩下{{dataList.times}}票</h1>
          <h1 v-show="dialogType == 3">亲，每天兑换限{{dataList.cmEveryLimit}}票。您今日兑换已达上限，明天再来哦~</h1>
          <h1 v-show="dialogType == 5">换票成功</h1>
          <div class="tip-button-modules">
            <button @click="dialogType = 0" v-show="dialogType != 5"  class="select-button">
              我知道了
            </button>
            <button v-show="dialogType == 2" @click="MixinToUrl('cmi-mission')" class="select-button">
              赚C米
            </button>
            <button @click="toVoteDetail" v-show="dialogType == 5"   class="select-button">
              前往投票
            </button>
          </div>

        </div>



      </div>
    </div>

    <!-- <div v-show="isTip" class='common-title'><p>{{tip}}</p></div> -->


  </div>
</template>

<script>

  import * as CMI_API from "@/api/cmi"
  import store from "@/store/index"

  export default {
    name: "ticket",
    data(){
      return{
        dialogType: 0,
        tip: '恭喜您，兑换成功~test',
        path: '',
        dreamPath: '',
        // userId:store.state.userId,
        dataList:{
          integral:0,
          times:0,
          cmEveryLimit:10,
        },
        ruleForm:{
          num:1,
          userId:store.state.userId,
          userToken:store.state.token,
          // userId: 'fff04119e87d40ef8297bb715649bd86',
          // userId: 'fb839d85481e440ea2a1551152674271',
        },
        isClick:true,
        isTip:false,
        reloadNun: 0,
        timer: null
      }
    },
    computed:{
      userId(){
        return store.state.userId
      },
      token() {
        return store.state.token
      }
    },
    watch: {
      userId (val) {
        this.loadCmi()
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        console.log('路由守卫---')
        // cmi任务进来的 路由 name = cmi-index
        console.log(from)
        vm.path = from.name
      })
    },

    // created() {
    //     window['setUserId'] = function(userId){
    //       store.commit('changeUserId',userId)
    //     };
    //     this.MIXINUserId();
    // },
    mounted(){
      if(this.userId != ""){
        // this.tip = this.userId
        // this.isTip = true
        this.loadCmi()
      }
    },
    methods:{
          // 换票成功跳转  分别做
      toVoteDetail() {
        console.log('-----去投票---')
        console.log(this.path)
        this.dialogType = 0
        //1、cmi任务进来的，跳转至梦想官主页
        if(this.path == 'cmi-index'){
          // window.location.href = 'http://bbccmxgshop.meibbc.com/#/Featuredgood'
          window.location.href ='http://appmini.meibbc.com/bbccmxgshop/#/Featuredgood'
          // window.location.href = "http://testh5shop.meibbc.com/#/Featuredgood"
        } else{
          this.$router.go(-1)
        }
        //2、我的主页
        // if(this.dreamPath == 'home') {
        //   this.$router.go(-1)
        // }
        //3、他人主页
        // if(this.dreamPath == 'home') {
        //   this.$router.go(-1)
        // }
        //4、梦想官主页进来 返回梦想官主页

      },
      getUrlParam(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        let r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
      },
      loadCmi(){
        // alert(CMI_API.toExchange(this.userId).url)
        CMI_API.toExchange(this.userId).then(data=>{ 
        // CMI_API.toExchange('fff04119e87d40ef8297bb715649bd86').then(data=>{
        // CMI_API.toExchange('fb839d85481e440ea2a1551152674271').then(data=>{
          if(data){
            
            this.dataList = data;
          }
          // alert(data)
        })
      },
      
      checkDialogType(){
        let dataList = this.dataList;
        let cmiNumber = this.dataList.cmEveryLimit;
        if(dataList.times == 0){
          this.dialogType = 3
        }else{
          if(dataList.integral < dataList.cmTicketPrice){
            this.dialogType = 2
          }else{
            this.dialogType = 1
          }
        }
        // this.dataList.times = 1
        // this.dialogType = 1
      },
      changeNum(num){

        // 票数
        let data =  parseInt(this.ruleForm.num) + parseInt(num);
        // 
        if(data < 1){
          return
        } 
        
        if(this.dataList.cmEveryLimit != 0){
          // // 'c米不足~'
          if(data*this.dataList.cmTicketPrice <= this.dataList.integral) {
            // 上限
            if(data > this.dataList.times) {
              this.ruleForm.num = this.dataList.times
              this.dialogType = 4
              return
            }
            this.ruleForm.num = data;
          }else{
            // 'c米不足~'
            this.ruleForm.num = Math.floor(this.dataList.integral/this.dataList.cmTicketPrice) ;
            // this.isTip = true
            // this.tip = 'c米不足~'
            this.dialogType = 2
            return
          }
        }else{
          // if(this.dataList.cmEveryLimit == 0){
            if( this.dataList.integral >= data * this.dataList.cmTicketPrice){
              this.ruleForm.num = data;
            }else{
              this.dialogType = 2
            }
            return
          // }
        }
      },
      convertFun(){
        const self = this;
        if(this.isClick){
          this.isClick = false;
          this.ruleForm.userId = this.userId  
          this.ruleForm.userToken = this.token  
          CMI_API.exchangeTickets(this.ruleForm).then(data=>{
            this.isClick = true;
            if(data){
              this.isTip=true;
              this.tip = '恭喜您，兑换成功~'
              this.dialogType = 5
              setTimeout(function () {
                self.isTip = false;
              },1500)
              this.loadCmi();
              // this.dialogType = 0;
            }
          })
        }

      },
      check_num(){
  
        let license_num = this.ruleForm.num;
        license_num = license_num.replace(/[^\d]/g, ''); // 清除“数字”和“.”以外的字符
        if (license_num.indexOf('.') < 0 && license_num != '') {
            // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
            license_num = parseInt(license_num);
        }
        let data = license_num
        if(this.dataList.cmEveryLimit != 0){
          // // 'c米不足~'
          if(data*this.dataList.cmTicketPrice <= this.dataList.integral) {
            // 上限
            if(data > this.dataList.times) {
              this.ruleForm.num = this.dataList.times
              this.dialogType = 4
              return
            }
            this.ruleForm.num = data;
          }else{
            // 'c米不足~'
            this.ruleForm.num = Math.floor(this.dataList.integral/this.dataList.cmTicketPrice) ;
            // this.isTip = true
            // this.tip = 'c米不足~'
            this.dialogType = 2
            return
          }
        }else{
          // if(this.dataList.cmEveryLimit == 0){
            if( this.dataList.integral >= data * this.dataList.cmTicketPrice){
              this.ruleForm.num = data;
            }else{
              this.ruleForm.num = Math.floor(this.dataList.integral/this.dataList.cmTicketPrice)
              this.dialogType = 2
            }
            return
          // }
        }
        //         // 兑换上限
        // if(license_num > this.dataList.times) {
        //   this.ruleForm.num = this.dataList.times
        //   this.dialogType = 4
        // }
        // if(license_num*this.dataList.cmTicketPrice <= this.dataList.integral) {
        //   this.ruleForm.num = license_num;
        // }else{
        //   // 'c米不足~'
        //   this.ruleForm.num = Math.floor(this.dataList.integral/this.dataList.cmTicketPrice) ;
        //   // this.isTip = true
        //   // this.tip = 'c米不足~'
        //   this.dialogType = 2
        // }


      },
      check_blur(){
        if(!this.ruleForm.num) {
          this.ruleForm.num = 1
        }
      }
    }
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .header-right{position: relative;z-index: 9}
  .bbc-index{border-top: .2rem solid #F2F2F2}
  .cmi-ticket{background: url("../../assets/img/cmi/banner3.png");background-size: 100% 100% ;width: 6.8rem;height: 1.6rem;
  display: block;margin: auto;margin-top: .25rem;position: relative}
  .cmi-ticket span{color: white;position: absolute;top: .2rem;left: 0;font-size: .22rem;font-weight: bold;transform: rotate(-45deg)}
  .cmi-ticket button{height: 100%;width: 1.5rem;float: right;background-color: transparent}
  .promptly-button{font-size: .32rem;text-align: center;color: white}
  .promptly-button p:nth-child(2){margin-top: .1rem}
  .common-shadow-modules-div{width: 6rem;height: 5.62rem}
  .select-modules{text-align: center;margin-top: .62rem}
  .select-modules h1{font-size: .34rem;color: black;font-weight: bold}
  .select-input{width: 3.3rem;height: .8rem;border-radius: 8px;text-align: center;line-height: .8rem;display: block;margin: auto;margin-top: .64rem}
  .select-input button{float: left;width: .8rem;color: #A2A2A2;background-color: white;height: 100%;border: 1px solid #A2A2A2;font-size: .5rem}
  .select-input div{float: left;width: calc(100% - 1.6rem);height: 100%;border-top: 1px solid #A2A2A2;border-bottom: 1px solid #A2A2A2;
    font-size: .46rem;color: #A2A2A2}
  .select-input div input{
    border: none;
    outline: none;
    text-align: center;
    float: left;
    width: 100%;
    height: 100%;
    font-size: .46rem;
  }
  .select-modules h2{color: #666666;font-size: .3rem;margin-top: .35rem}
  .select-button{margin: auto;display: block;margin-top: .65rem;background-color: #F63B75;border-radius: 35px;
    border-right: 35px;text-align: center;height: .7rem;line-height: .7rem;font-size: .28rem;color: white;width: 2.3rem}
  .tip-modules img{margin:auto;margin-top: .6rem;width: 2.32rem;display: block}
  .tip-modules h1{font-size: .34rem;color: black;font-weight: bold;text-align: center;margin-top: .65rem;padding: 0 .34rem}
  .tip-button-modules{text-align: center}
  .tip-button-modules button{display: inline-block}
</style>
