import request from '../utils/request'
import {homeUrl} from './url'
// import {homeUlApi} from '../interface'
// 首页UL请求
export const homeUlReq = data => request({
    url: homeUrl,
    data,
})
