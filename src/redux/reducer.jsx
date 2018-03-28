import { combineReducers } from 'redux';
export let initialState = {
  getListData: {
    loading: true,
    error: {},
    data: [],
    content: {}
  }
}


function getListData(state = initialState.getListData, action) {
  switch (action.type) {
    case 'GET_NOTICELIST_LOADING':
      return Object.assign({}, state, { data: [], loading: action.payload })
    case 'GET_NOTICELIST_LOADING_SUCCESS':
      return Object.assign({}, state, { data: action.payload, loading: false, error: {} })
    case 'GET_DETAIL_LOADING_SUCCESS':
      return Object.assign({}, state, { content: action.payload, loading: false, error: {} })
    case 'GET_NOTICELIST_LOADING_FAILD':
      return Object.assign({}, state, { data: [], error: action.payload })
    default:
      return state
  }
}


// 将所有的reducer结合为一个,传给store
const rootReducer = combineReducers({
  getListData
})

export default rootReducer