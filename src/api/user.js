import request from "../utils/request"
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

  // 好友
export function selectcount(params) {
  return request({
    url:"personal/saleorg/selectcount",
    method:"post",
    params
  })
}

// banner图
export function pageJump(params) {
  return request({
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
  return request({
    url:"/meibbcapp/community/diary/diaryCount",
    method:"get",
    params
  })
}

  // 粉丝
export function personalPage(params) {
  return request({
    url:"personal/personalPage",
    method:"get",
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

export function findIntegralList(params) {
  return request({
    url:"api/v1/integralList/findIntegralList",
    method:"post",
    data:qs.stringify(params)
  })
}

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

