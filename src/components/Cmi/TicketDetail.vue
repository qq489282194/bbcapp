<template>
  <div>

    <header>
      <div class="header-div">
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">兑换记录</span>
      </div>
    </header>

    <div class="bbc-index">
      <div v-for="item in dataList" class="cmi-ticket">
        <a>*{{item.ticketCnt}}</a>
        <span>{{item.cmTicketPrice}}C米</span>
        <button class="promptly-button">
          <p>兑换时间</p>
          <p>{{item.createTime}}</p>
        </button>
      </div>
    </div>



  </div>
</template>

<script>

  import * as CMI_API from "@/api/cmi";
  import store from "@/store/index"


  export default {
    name: "ticket-detail",
    data(){
      return{
        searchForm:{
          userId:store.state.userId,
          // userId:'71843d95aaa74d57b0a1547271181050',
          page:1,
          size:100,
        },
        dataList:{},
      }
    },
    mounted(){
      this.loadCmiList()
    },
    methods:{
      loadCmiList(){
        CMI_API.tickeList(this.searchForm).then(data=>{
          if(data){
            this.dataList =data.list;
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
  .bbc-index{border-top: .2rem solid #F2F2F2}
  .cmi-ticket{background: url("../../assets/img/cmi/banner3.png");background-size: 100% 100% ;width: 6.8rem;height: 1.6rem;
    display: block;margin: auto;margin-top: .25rem;position: relative}
  .cmi-ticket span{color: white;position: absolute;top: .2rem;left: 0;font-size: .22rem;font-weight: bold;transform: rotate(-45deg)}
  .cmi-ticket button{height: 100%;width: 1.5rem;float: right;background-color: transparent}
  .promptly-button{font-size: .26rem;text-align: center;color: white}
  .promptly-button p:nth-child(2){margin-top: .1rem;font-size: .22rem}
  .cmi-ticket a{position: absolute;color: white;top: .3rem;left: 4.1rem;font-size: .38rem}
</style>
