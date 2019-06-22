import request from "../utils/request3"
import qs from "qs";

export function toExchange(params) {
  return request({
    url:"mxg/exchangeTicket/toExchange?userId="+params,
    method:"get",
  })
}

export function exchangeTickets(params) {
  return request({
    url:"mxg/exchangeTicket/exchangeTickets",
    method:"post",
    data:qs.stringify(params)
  })
}

export function tickeList(params) {
  return request({
    url:"mxg/exchangeTicket/list",
    method:"get",
    params
  })
}

