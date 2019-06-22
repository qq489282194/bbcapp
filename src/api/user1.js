import request from "../utils/request1"
import qs from "qs";

export function isSigned(params) {
  return request({
    url:"personal/signlog/isSigned",
    method:"post",
    data:qs.stringify(params)
  })
}
