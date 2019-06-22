import Vue from 'vue';
import store from "@/store/index"

export default {
  data(){
    return{}
  },
  mounted(){
  },
  methods:{
    MIXINGETHost(){
      return window.location.protocol+"//"+window.location.host+"/";
    },
    formatDateTime(row, column) {
      let dateTime = ""
      if(row != ""){
        let date = new Date(row);
        let Y = date.getFullYear() + '-';
        let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
        let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
        let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        dateTime = Y + M + D + h + m + s;
      }
      return dateTime;
    },
    MIXINYearMonthDate(index,type){
      if(index == undefined || index == null){
        index = 0;
      }
      let dateTime = ""
      let date = new Date();
      if(index != 0){
        date = new Date(date.getTime() + (24*60*60*1000 * index))
      }
      let Y = date.getFullYear() + '-';
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
      let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
      dateTime = Y + M + D;
      return dateTime;
    },
    MIXINMonthDate(index){
      if(index == undefined || index == null){
        index = 0;
      }
      let dateTime = ""
      let date = new Date();
      if(index != 0){
        date = new Date(date.getTime() + (24*60*60*1000 * index))
      }
      let M = date.getMonth() + 1 < 10 ? '' + (date.getMonth() + 1) + '.' : date.getMonth() + 1 + '.';
      let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
      dateTime =M + D;
      return dateTime;
    },
    MixinToUrl(name,params){
      this.$router.push({"name":name,query:params});
    },
    MIXINToDetail(id,type){
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      let params = {"modelId":id,"type":type};
      if(isAndroid){
        params = JSON.stringify(params)
        window.JsToJava.toDetail(params);
      }else{
        window.webkit.messageHandlers.toDetail.postMessage(params)
      }
    },
    _system_shareTo(title,description,imgSrc,url,groupRecordId,activityId,type)  {
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      let params = {"title": title, "url": url, "description":description, "imgSrc": imgSrc, "type":type};
      if(isAndroid){
        window.JsToJava.shareTo(JSON.stringify(params));
      }else{
        window.webkit.messageHandlers.shareTo.postMessage(params);
      }
    },
    MIXINUserId(){
      var userId = "";
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        store.commit("changeUserId",window.JsToJava.getUserId());
      }else{
        window.webkit.messageHandlers.getUserId.postMessage({});
      }
    },
    MIXINGetToken(){
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        store.commit("changeToken",window.JsToJava.getToken());
      }else{
        window.webkit.messageHandlers.getToken.postMessage({});
      }
    },
    closeHtml(){
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        window.JsToJava.finishWeb();
      }else{
        window.webkit.messageHandlers.finishWeb.postMessage({});
      }
    },
    backRouter(){
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        window.JsToJava.back();
      }else{
        this.$router.back(-1)
      }
      // this.$router.go(-1)
    },
    toBcckSecond(name){
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        setTimeout(()=>{
          window.JsToJava.back();
        },10)
        window.JsToJava.back();
      }else{
        this.$router.push({"name":name});
      }
    },
    GetUrlParam(paraName){
      var url = document.location.toString();
      var arrObj = url.split("?");

      if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
          arr = arrPara[i].split("=");

          if (arr != null && arr[0] == paraName) {
            return arr[1];
          }
        }
        return "";
      }
      else {
        return "";
      }
    },
  }
}
