<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">最近转赠账户</span>
        <!--<a @click="backRouter()" class="icon-right-a">-->
        <!--<i class="icon-right-record"></i>-->
        <!--</a>-->
      </div>
    </header>

    <div class="bbc-index">
      <ul>
        <li @click="select(item.phone)" v-for="item in dataList">
          <img v-if="item.icon == null || item.icon == '' || item.icon == 'null'" src="../../assets/img/user.png"/>
          <img v-else :src="'https://oss.meibbc.com/'+item.icon"/>
          <p>{{item.niceName}}</p>
          <p>{{item.phone}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import * as USER_API from "@/api/user"
  import store from "@/store/index"

  export default {
    name: "give-detail",
    data(){
      return{
        ruleForm:{
          pageNum:1,
          pageSize:10,
          sendPeopleId:store.state.userId,
        },
        dataList:{},
      }
    },
    mounted(){
      this.loadFriend();
    },
    methods:{
      loadFriend(){
        USER_API.queryCmTaskList(this.ruleForm).then(data => {
          this.dataList = data.data;
        })
      },
      select(phone){
        let giveForm = store.state.giveForm;
        giveForm.phone = phone;
        store.commit('changeGiveForm',giveForm);
        this.backRouter();
      }
    }
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .bbc-index{border-top: 1px solid #CFCFCF}
  ul li{padding: .4rem .32rem;border-bottom: 1px solid #E5E5E5}
  li img{float: left;width: .9rem;height: .9rem;border-radius: 50%;margin-right: .4rem}
  li p{font-size: .32rem}
  li p:nth-child(3){font-size: .26rem;margin-top: .1rem}
</style>
