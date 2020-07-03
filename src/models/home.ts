import { ModelType } from '../interface'
import { homeUlReq } from '../services'
const home: ModelType = {
    namespace: 'home',
    state: {
        ulData: []
    },
    effects: {
        *getData({ }, { call, put }) {
            const result = yield call(homeUlReq)
            yield put({ type: 'homeUl', ulData: result.data[0] })
        }
    },
    reducers: {
        homeUl(state, action) {
            return { ...state, ...action }
        }
    }
}

export default home