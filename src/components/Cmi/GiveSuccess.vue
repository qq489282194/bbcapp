<template>
  <div class="success">
    <header>
      <div class="header-div">
        <a v-show="isBack" @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">C米转赠</span>
      </div>
    </header>
    <div class="bbc-index">
      <div class="check-modules">

        <div v-show="isShow">
          <img v-if="userIcon == null || userIcon == '' || userIcon == 'null'" class="check-head" src="../../assets/img/user.png"/>
          <img v-else class="check-head" :src="'https://oss.meibbc.com/'+userIcon"/>
          <p>{{niceName}}</p>
          <p>{{giveForm.phone}}</p>
          <p style="margin-top: .6rem">转赠:<span>{{giveForm.cmNum}}</span><img src="../../assets/img/cmi/cmi.png"/></p>
          <!-- <button @click="addCmi()" class="give-button">确认转赠</button> -->
          <button @click="onSume" class="give-button">确认转赠</button>
        </div>


        <div v-show="!isShow">
          <img class="success-img" src="../../assets/img/cmi/success.png"/>
          <p style="margin-top: .2rem">转赠成功</p>
          <p style="margin-top: .4rem">{{giveForm.cmNum}}<img src="../../assets/img/cmi/cmi.png"/></p>
          <p class="text-tip"><span>转赠给</span><span>{{niceName}}</span></p>
          <p class="text-tip"><span>时间</span><span>{{time}}</span></p>
          <button @click="toBcckSecond('cmi-index')" class="give-button">完成</button>
        </div>

      </div>

    </div>

    <div v-show="isTip != 0" class="common-shadow-modules">
      <div class="common-shadow-modules-div">
        <img v-show="isTip == 4" src="../../assets/img/cmi/14.png"/>
        <!-- <img v-show="isTip == 5" src="../../assets/img/cmi/14.png"/> -->
        <img v-show="isTip == 6" src="../../assets/img/cmi/14.png"/>
        <img v-show="isTip == 3" src="../../assets/img/cmi/15.png"/>
        <p v-html="messages"></p>
        <!-- <p v-show="isTip == 6">{{messages}}</p> -->
        <div class="button-modules">
          <button v-show="isTip == 3" style="background-color: white;border: 1px solid #FC858F;color: #FC858F" @click="MixinToUrl('cmi-mission')">去做任务</button>
          <button v-show="isTip != 6" @click="queDing">确定</button>
          <button v-show="isTip == 6" style="background-color: white;border: 1px solid #FC858F;color: #FC858F" @click="cancel">取消</button>
          <button v-show="isTip == 6" @click="toSetpass">确定</button>
        </div>

      </div>
    </div>

    <div v-if="isShowPassWord" class="pass-ward">
      <div class="pass-in">
        <div class="pass-in-title"> 
          <img @click="closePass" class="pass-close" src="../../assets/img/cmi/down.png" alt="">
          请输入支付密码
        </div>
        <div class="pass-box">
          <ul class="pass-box-in">
            <li><span v-show="valPassWord[0]"></span></li>
            <li><span v-show="valPassWord[1]"></span></li>
            <li><span v-show="valPassWord[2]"></span></li>
            <li><span v-show="valPassWord[3]"></span></li>
            <li><span v-show="valPassWord[4]"></span></li>
            <li><span v-show="valPassWord[5]"></span></li>
          </ul>
          <span class="span" @click="forgetPass">忘记密码？</span>
        </div>
        <div class="pass-pan">
          <ul class="pass-pan-ul">
            <li @click.stop="inPassWord('1')">1</li>
            <li @click="inPassWord('2')">2</li>
            <li @click="inPassWord('3')">3</li>
          </ul>
          <ul class="pass-pan-ul">
            <li @click="inPassWord('4')">4</li>
            <li @click="inPassWord('5')">5</li>
            <li @click="inPassWord('6')">6</li>
          </ul>
          <ul class="pass-pan-ul">
            <li @click="inPassWord('7')">7</li>
            <li @click="inPassWord('8')">8</li>
            <li @click="inPassWord('9')">9</li>
          </ul>
          <ul class="pass-pan-ul">
            <li style="background: #ccc;"></li>
            <li @click="inPassWord('0')">0</li>
            <li @click="detelPass" style="background: #ccc;">
              <img src="../../assets/img/cmi/passDetele.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import * as USER_API from "@/api/user"
  import store from "@/store/index"
  // import { ShortPassword } from '@nutui/nutui';

  export default {
    name: "give-success",
    data(){
      return{
        giveForm:store.state.giveForm,
        userIcon:this.$route.query.icon,
        niceName:this.$route.query.niceName,
        isShow:true,
        time:"",
        isTip: 0,
        isPass: 1,
        message:"",
        isBack:true,
        isShowPassWord:false,
        valPassWord: [],
      }
    },
    mounted(){
    },
    computed:{
      userId(){
        return store.state.userId;
      },
    },
    methods:{
      queDing() {
        this.valPassWord = []
        this.isTip = 0
      },
      cancel() {
        this.isTip = 0
      },
      toSetpass() {
        // 未设置密码的，设置密码
        console.log('------设置密码-----')
        this.isTip = 0
        this.$system_details(1, 31)
      },
      // 忘记密码
      forgetPass(){
        console.log('忘记密码')
        // toDetail({"type":31})
        this.$system_details(1, 31)
      },
      // 关闭支付密码
      closePass(){
        this.isShowPassWord = false
        this.valPassWord = []
      },
      // 删除密码
      detelPass() {
        let length = this.valPassWord.length
        if(length > 0) {
          this.valPassWord.pop(this.valPassWord[length-1])
        }
        console.log('detel')
        console.log(this.valPassWord)
      },
      // 输入密码
      inPassWord(index){
        if(this.valPassWord.length > 5) {
          return
        }
        this.valPassWord.push(index)
        console.log(this.valPassWord)
        if(this.valPassWord.length > 5) {
          console.log('密码输入完毕~~~')
          console.log(this.valPassWord)
          let passwordStr = ''
          this.valPassWord.forEach((item)=>{
            passwordStr = passwordStr + item
          })
          console.log('passwordStr')
          console.log(passwordStr)
          this.giveForm.payPassword = this.$md5(passwordStr)
          this.addCmi()
          console.log(this.giveForm.payPassword)
          // this.isShowPassWord = false
        }
      },
      onSume(){
        // this.isShowPassWord = true
        this.checkPayPwd()
      },
      checkPayPwd() {
        let userId = this.userId 
        // let userId = '0000dc4e98964baf8271e258b5071254'
        USER_API.checkPayPwd(userId).then(data =>{
          console.log('---000')
          console.log(data)
          if(data.status == 2) {
            this.isPass = 2
            this.isTip = 6
            this.messages = '亲，您尚未设置支付密码，请前往设置'
          } else {
            this.isPass = 1
            this.isShowPassWord = true
          }
        })
      },
      addCmi(){
        USER_API.addCmGive(this.giveForm).then(data => {
          if(data){
            this.isShowPassWord = false
            if(data.status == 3){
              this.isTip = 3;
              this.messages = data.message;
            }else if(data.status == 4){
              this.isTip = 4;
              this.messages = data.message;
            }else if(data.status == 2){
              this.isTip = 4;
              this.messages = data.message;
            }else if(data.status == 5){
              this.isTip = 4;
              this.messages = data.message;
            }else if(data.status == 6){
              this.isTip = 6;
              this.messages = data.message;
            }else{
              this.isBack = false;
              this.valPassWord = []
              let date = new Date();
              this.time = this.formatDateTime(date);
              this.isShow = false;
              let params = {cmNum:"",phone:"",sendPeopleId:store.state.userId};
              store.commit('changeGiveForm',params);
            }
          }
        })
      },
    }
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .bbc-index{background-color: #F2F2F2}
  .check-modules{background-color: white;padding-top: .3rem;padding-bottom: 1.67rem}
  .check-head{display: block;margin: auto;width: 1.4rem;height: 1.4rem;border-radius: 50%;margin-top: .3rem;margin-bottom: .1rem}
  .check-modules p{font-size: .32rem;margin-top: .1rem;text-align: center}
  .check-modules p span{font-size: .36rem}
  .give-button{display: block;text-align: center;margin: auto;margin-top: .84rem;width: 6.86rem;height: .7rem;line-height: .7rem;color: white;
  font-size: .28rem;background-color: #FC858F;border-radius: 35px}
  .success-img{width: 2.03rem;height: 1.61rem;margin: auto;display: block}
  .text-tip{text-align: inherit!important;padding: 0 .31rem}
  .text-tip span{text-align: left;color: #999999;font-size: .28rem!important;}
  .text-tip span:nth-child(2){float: right!important;}
  .check-modules p img{width: .38rem;height: .38rem;display: inline-block}

  .common-shadow-modules-div{width: 5.8rem;height: 5.6rem}
  .common-shadow-modules-div img{width: 2.03rem;height: 1.59rem;display: block;margin: auto;margin-top: .6rem}
  .common-shadow-modules-div p{text-align: center;padding: 0 1rem;margin-top: .86rem;font-size: .32rem}
  .common-shadow-modules-div button{text-align: center;display: block;width: 2.3rem;height: .7rem;line-height: .7rem;margin: auto;margin-top: .51rem;
    border-radius: 35px;font-size: .28rem;color: white;background-color: #FC858F}
  .button-modules{text-align: center}
  .button-modules button{display: inline-block}

  .success{ position: relative;}
  .pass-ward{
    position: fixed;z-index: 9999;left: 0;top: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.6);
  }
  .pass-in{width: 100%; height: 8rem; position: absolute; left: 0;bottom: 0; background: #fff; 
  border-top-left-radius: 0.3rem; border-top-right-radius: 0.3rem;}
  .pass-in-title{width: 100%; height: 1rem; text-align: center;color: #333; font-size: 0.3rem; 
   border-bottom: 0.02rem solid #E5E5E5;line-height: 1rem; position: relative;}
   .pass-box{
     width: 100%; height: 2rem;
   }
   .pass-box-in{ width: 6rem; height: 1rem; border: 0.02rem solid #CFCFCF; display: flex; margin: 0.4rem 0 0 0.75rem;}
   .pass-box-in li{ border-right: 0.02rem solid #CFCFCF; height: 1rem; width: 1rem;
    display: flex; text-align: center; align-items: center; justify-content: center;}
   .pass-box-in li span { 
     display: block;width: 0.2rem; height: 0.2rem; border-radius: 0.1rem; background: #333;}
   .pass-box .span{
     margin-top: 0.3rem;
     text-align: right; margin-right: 0.75rem; color: #6AB0F1; float: right;
   }
   .pass-pan{ width: 100%; height: 5rem; background: #CCC; padding-top: 0.05rem; }
   .pass-pan-ul{ width: 100%; height: 1rem; display: flex; 
   align-items: center; justify-content: space-around; margin-bottom: 0.05rem;}
   .pass-pan-ul li{ width: 31%; height: 0.9rem; background: #fff; border-radius: 0.2rem; 
   color: #333; font-size: 0.36rem;  display: flex; align-items: center; justify-content: center;}
    .pass-pan-ul li img{ width: 0.5rem;}

    .pass-close{ position: absolute; left: 0.7rem; top: 0.5rem; width: 0.3rem; height: 0.15rem; transform: rotate(90deg)}
</style>
