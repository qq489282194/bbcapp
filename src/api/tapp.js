import request from "../utils/request2"
import qs from "qs";

export function messageList(params) {
  return request({
    url:"messagecenter/controller/ContextController/UnReadData.html?receiver="+params,
    method:"get",
  })
}
