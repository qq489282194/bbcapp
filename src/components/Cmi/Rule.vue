<template>
  <div>
    <header>
      <div class="header-div">
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">C米细则</span>
      </div>
    </header>

    <div class="bbc-index">
      <div class="rule-modules">
        <p>1、新用户下载注册得30个C米；</p>
        <p>2、老用户通过分享链接，拉新用户注册下载注册，老用户可获得20C米，新用户可获得10C米，拉新人数不限；</p>
        <p>3、参与签到用户奖励，按照用户当日连续签到情况，可获得对应的C米奖励（具体C米奖励以线上为准）；每连续签到7天为一个循环，
          即连续签到第8天按照第1天签到开始重新计算；用户连续签到断签后，重新签到按照第1天签到重新计算获得C米奖励；</p>
        <p>4、用户在APP发布文章，并被平台审核通过，得10C米，发布文章次数不限；</p>
        <p>5、用户点赞APP的文章可得2C米，每天可以点赞10次；</p>
        <p>6、用户分享文章得5C米，每天可以分享5次；</p>
        <p>7、用户在APP上，发提问得5C米，需要平台审核通过，提问问题次数不限；</p>
        <p>8、用户在APP上，解答问题得5C米，需要平台审核通过，解答问题次数不限；</p>
        <p>9、用户每次收藏文章，可得5C米，每天可以收藏5篇文章；</p>
        <p>10、完善后台个人信息可得30C米（如姓名、绑定手机、身高、体重、三围等）</p>
        <p>11.用户评论资讯内容（文章、视频、语音），可奖励5C米，每天评论次数不限。</p>
        <p>12.用户对好的资讯内容（文章、视频、语音），可以任意打赏C米，打赏次数不限。</p>
        <p>13.用户阅读资讯内容（文章要求1分钟、视频要求观看完、语音要求听完），可奖励5C米。</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "rule",
    data(){
      return{}
    },
  }
</script>

<style scoped>
  header{background-color: #fc858f}
  .header-div{background-color: white}
  .header-div .header-title{z-index: 1}
  .bbc-index{background-color: #F2F2F2;}
  .rule-modules{width: 7.02rem;margin: auto;background-color: white;color: #333333;font-size: .3rem;padding: 0 .43rem;padding-top: .57rem;
    padding-bottom: .55rem;text-align: justify;margin-top: .3rem;border-radius: 20px}
  .rule-modules p+p{margin-top: .34rem}
</style>
