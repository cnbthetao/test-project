import { ModelType } from '../interface'
import { homeUlReq, homeDataReq } from '../services'
const home: ModelType = {
    namespace: 'home',
    state: {
        ulData: [],
        homeUlData: []
    },
    effects: {
        *getData({ }, { call, put }) {
            const result = yield call(homeUlReq)
            yield put({ type: 'homeUl', ulData: result.data[0] })
        },
        *getHome({ payload }, { call, put }) {
            const result = yield call(homeDataReq, payload)
            yield put({ type: 'homeData', homeUlData: result.data })
        }
    },
    reducers: {
        homeUl(state, action) {
            return { ...state, ...action }
        },
        homeData(state, action) {
            return { ...state, ...action }
        }
    }
}

export default home