import request from '../utils/request'
import { homeUrl, homeData } from './url'
// import {homeUlApi} from '../interface'
// 首页UL请求
export const homeUlReq = data => request({
    url: homeUrl,
    data,
})
export const homeDataReq = data => request({
    url: homeData,
    data
})