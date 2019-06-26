import request from "../utils/request"
import request1 from "../utils/request1"
import request2 from "../utils/request2"
import request4 from "../utils/request4"
import request5 from "../utils/request5"
import qs from "qs";

export function findUserByUserid(params) {
  return request({
    url:"api/v1/user/findUserByUserid?userid="+params,
    method:"post",
  })
}


  // 用户ID查询 获取我的积分
  export function postUserByUserid(params) {
    return request({
      url:"/api/v1/user/findUserByUserid",
      method:"post",
      params
    })
  }

  // 未读消息
  export function UnReadData(params) {
    return request5({
      url:"/message/messagecenter/controller/UnReadData",
      method:"post",
      params
    })
  }

  // 好友
export function selectcount(params) {
  return request({
    url:"personal/saleorg/selectcount",
    method:"post",
    headers: { 'Content-Type': 'application/json' },
    data:params
  })
}

// banner图
export function pageJump(params) {
  return request4({
    url:"/pageJump",
    method:"get",
    params
  })
}


export function countCollect(params) {
  return request({
    url:"personal/sys/countCollect",
    method:"get",
    params
  })
}

  // 日记
export function diaryCount(params) {
  return request2({
    url:"/meibbcapp/community/diary/diaryCount",
    method:"get",
    headers: { 'Content-Type': 'application/json' },
    params
  })
}

  // 粉丝
export function personalPage(params) {
  return request1({
    url:"/information/personal/personalPage",
    method:"get",
    headers: { 'Content-Type': 'application/json' },
    params
  })
}

  // 关注
export function countCare(params) {
  return request({
    url:"/personal/sys/countCare/V1",
    method:"get",
    params
  })
}

  // 获取首页文章
  export function getArticle(params) {
    return request2({
      url:"/bbc-information/type-article/get-article",
      method:"get",
      params
    })
  }

export function isSigned(params) {
  return request({
    url:"personal/signlog/isSigned",
    method:"post",
    data:qs.stringify(params)
  })
}

export function addsignlog(params) {
  return request({
    url:"personal/signlog/addsignlog",
    method:"post",
    data:qs.stringify(params)
  })
}

export function getCmTaskList(params) {
  return request({
    url:"api/v1/cmtask/getCmTaskList?userId="+params,
    method:"get",
  })
}

export function updateCmTaskLog(params) {
  return request({
    url:"api/v1/cmTaskLog/updateCmTaskLog",
    method:"post",
    data:qs.stringify(params)
  })
}

// 钱包 C米明细
export function findIntegralList(params) {
  return request({
    url:"/api/v1/integralList/findIntegralList",
    method:"post",
    params
  })
}

// export function findIntegralList(params) {
//   return request({
//     url:"api/v1/integralList/findIntegralList",
//     method:"post",
//     data:qs.stringify(params)
//   })
// }

export function queryCmShare(params) {
  return request({
    url:"api/v1/cmShare/queryCmShare?shareUserId="+params,
    method:"get",
  })
}

export function getUser(params) {
  return request({
    url:"api/v1/user/getUser",
    method:"post",
    data:qs.stringify(params)
  })
}

export function addCmGive(params) {
  return request({
    url:"api/v1/cmGive/addCmGiveV1",
    method:"post",
    data:params
  })
}

export function queryCmTaskList(params) {
  return request({
    url:"api/v1/cmGive/queryCmTaskList",
    method:"post",
    data:params
  })
}

export function sumCmTask(params) {
  return request({
    url:"api/v1/cmGive/sumCmTaskV1",
    method:"post",
    data:params
  })
}

export function checkPayPwd(params) {
  return request({
    url:"/api/v1/cmGive/checkPayPwd/" + params,
    method:"post"
  })
}

