<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">C米转赠</span>
      </div>
    </header>

    <div class="bbc-index">
      <div style="background-color: white;padding-top: .4rem;padding-bottom: 1.67rem">
        <div class="give-input clear-both">
          <span>对方账户：</span>
          <input v-model="giveForm.phone" placeholder="请输入手机号码" type="number"/>
          <a @click="MixinToUrl('cmi-give-detail')">最近</a>
        </div>
        <p class="give-title">C米将实时转赠至对方账户，无法退回</p>
        <div style="margin-top: .7rem" class="give-input clear-both">
          <span>转赠数量：</span>
          <input v-model="giveForm.cmNum" @input="intCmiNUm($event)" placeholder="请输入转赠C米数量" type="number"/>
        </div>
        <button v-show="!isButton"  class="give-button">下一步</button>
        <button v-show="isButton"  @click="toNext()" class="give-button active">下一步</button>
      </div>
    </div>


    <div v-show="isTip" class="common-shadow-modules">
      <div class="common-shadow-modules-div">
        <img src="../../assets/img/cmi/14.png"/>
        <p>亲，您输入的账户尚未注册，请检查后重新输入~</p>
        <button @click="isTip = false">确定</button>
      </div>
    </div>

    <div v-show="isTip1 != 0" class="common-shadow-modules">
      <div class="common-shadow-modules-div">
        <img v-show="isTip1 == 4" src="../../assets/img/cmi/14.png"/>
        <img v-show="isTip1 == 3" src="../../assets/img/cmi/15.png"/>
        <p v-html="messages"></p>
        <div class="button-modules">
          <button v-show="isTip1 == 3" style="background-color: white;border: 1px solid #FC858F;color: #FC858F" @click="MixinToUrl('cmi-mission')">去做任务</button>
          <button @click="isTip1 = 0">确定</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

  import store from "@/store/index"
  import * as USER_API from "@/api/user"



  export default {
    name: "give",
    data(){
      return{
        giveForm:store.state.giveForm,
        isTip:false,
        isTip1:0,
        isButton:false,
        messages:"",
      }
    },
    computed:{
      newValue(){
        return this.giveForm.cmNum +""+this.giveForm.phone
      },
    },
    watch:{
      newValue (val) {
        if(this.giveForm.phone.length == 11 && (this.giveForm.cmNum > 0 && this.giveForm.cmNum <= 1000000000)){
          this.isButton = true
        }else if(this.giveForm.phone.length > 11){
          this.giveForm.phone = this.giveForm.phone.substring(0,11)
          this.isButton = false
        }else if(this.giveForm.cmNum > 1000000000){
          this.giveForm.cmNum = 1000000000
          this.isButton = false
        }else{
          this.isButton = false;
        }
      },
    },
    mounted(){
      if(this.giveForm.phone.length == 11 && (this.giveForm.cmNum > 0 && this.giveForm.cmNum <= 1000000000)){
        this.isButton = true
      }else if(this.giveForm.phone.length > 11){
        this.giveForm.phone = this.giveForm.phone.substring(0,11)
        this.isButton = false
      }else if(this.giveForm.cmNum > 1000000000){
        this.giveForm.cmNum = 1000000000
        this.isButton = false
      }else{
        this.isButton = false;
      }
    },
    methods:{
      intCmiNUm(e) {
        this.giveForm.cmNum = parseInt(this.giveForm.cmNum)
      },
      toNext(){
        const self = this;
        USER_API.sumCmTask(this.giveForm).then(row => {

          console.log('----')
          console.log(row)

          if(row){
            if(row.status == 2){
              this.isTip = true;
            }else if(row.status == 3){
              this.isTip1 = 3;
              this.messages = row.message;
            } else if(row.status == 4){
              this.isTip1 = 4;
              this.messages = row.message;
            } else if(row.status == 5){
              this.isTip1 = 4;
              this.messages = row.message;
            } else{
              let params = {phone:this.giveForm.phone};
              USER_API.getUser(params).then(data=>{
                if(data){
                  store.commit('changeGiveForm',this.giveForm);
                  let params = {icon:data.icon,niceName:data.niceName};
                  this.MixinToUrl('cmi-give-success',params)
                }
              })
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .icon-right-a{float: right;height: 100%;width: .6rem;position: relative;z-index: 99}
  .icon-right-record{width: .36rem;height: .38rem;display: block;background: url("../../assets/img/cmi/record.png");
    background-size: 100% 100%;margin-top: .2rem}
  .bbc-index{border-top: 1px solid #CFCFCF;background-color: #F2F2F2}
  .give-input span{float: left;font-size: .32rem}
  .give-input input{border: 1px solid #CFCFCF;background-color: white;color: black;font-size: .28rem;padding: 0 .2rem;width: 4.53rem;
  height: .7rem;line-height: .5rem;border-radius: 10px}
  input::-webkit-input-placeholder{color: #CFCFCF}
  .give-input{height: .7rem;line-height: .7rem;padding: 0 .32rem;position: relative}
  .give-title{padding: 0 .32rem;color: #999999;font-size: .22rem;margin-top: .16rem}
  .give-button{background-color: #CFCFCF;width: 6.56rem;height: .7rem;line-height: .7rem;text-align: center;color: white;display: block;
  margin: auto;border-radius: 35px;margin-top: .94rem;font-size: .28rem}
  .give-input a{color: #FC858F;font-size: .32rem;position: absolute;right: .3rem}
  .common-shadow-modules-div{width: 5.8rem;height: 6rem}
  .common-shadow-modules-div img{width: 2.03rem;height: 1.59rem;display: block;margin: auto;margin-top: .6rem}
  .common-shadow-modules-div p{text-align: center;padding: 0 1rem;margin-top: .86rem;font-size: .32rem}
  .common-shadow-modules-div button{text-align: center;display: block;width: 2.3rem;height: .7rem;line-height: .7rem;margin: auto;margin-top: .51rem;
  border-radius: 35px;font-size: .28rem;color: white;background-color: #FC858F}
  .give-button.active{background-color: #FC858F}
  .button-modules{text-align: center}
  .button-modules button{display: inline-block}
</style>
