import Vue from 'vue'
import axios from "axios"

const service = axios.create({
  baseURL:  "/meibbcapp",
  // baseURL:  "http://192.168.0.106:8989",
  timeout: 15000,
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem("token");
  config.headers.common['Authorization'] = token;
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use(function (response) {
  let status = response.data.status;
  let row = response.data.data;
  if(status == 1 || status == 10001){
    if(row === "" || row == null){
      row = true;
    }
  }else if(status == 2){
    row = false;
  }
  // 对响应数据做点什么
  return row;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default function request(options) {
  return service(options)
}

