<template>
    <router-view></router-view>
</template>

<script>
  import store from "@/store/index"

  export default {
    name: "cmi",
    mounted(){},
    data(){
      return{}
    },
    created(){
      // setTimeout(data => {
      //   store.commit('changeUserId',"5a95a774549e4eea8e21551978353681")
      // },1000)
      window['setUserId'] = function(userId){
        store.commit('changeUserId',userId)
      };
      this.MIXINUserId();
    },
  }
</script>

<style scoped>
  @import "../../assets/css/cmi/index.css";
</style>
