
import * as constants from './constants'
// 引入immutable中的fromJS方法
import { fromJS } from 'immutable' //, toJS

// 将state变成一个immutable对象
const stateDefault = fromJS({
  focused: false,
  mouseIn: false,
  searchList: [],
  currentPage: 1,
  pageSize: 3,
  totalPage: 1, 
  currentSearchList: [],
  showBackTop: false
})

const reducer = (state = stateDefault, action) => {
  const pageSize = state.get('pageSize')
  
  if(action.type === constants.SEARCH_FOCUS) {
    // 改变state值时，不能再直接改变，而是得通过set方法改变
    // const newState = JSON.parse(JSON.stringify(state))
    // newState.focused = true;
    // return newState;
    return state.set('focused', true)
  }
  if(action.type === constants.SEARCH_BLUR) {
    // const newState = JSON.parse(JSON.stringify(state))
    // newState.focused = false;
    // return newState;
    return state.set('focused', false)
  }
  if(action.type === constants.SEARCH_LIST) {
    
    const start = (state.get('currentPage') - 1) * pageSize
    const currentSearchList = action.data.slice(start, pageSize) // .toJS()
    const totalPage = action.data.size / pageSize;
    return state.set('searchList', action.data).set('currentSearchList', currentSearchList).set('totalPage', totalPage) // fromJS()
  }
  
  if(action.type === constants.MOUSE_IN) {
    return state.set("mouseIn", true)
  }
  if(action.type === constants.MOUSE_OUT) {
    return state.set("mouseIn", false)
  }
  if(action.type === constants.CHANGE_PAGE) {
    let curPage = state.get('currentPage') 
    let newCurrentSearchList = []
    let totalPage = state.get('totalPage')
    const totalSize = state.get('searchList')
    
    if( curPage < totalPage ) {
      const start = curPage * pageSize
      const end = (curPage + 1) * pageSize
      newCurrentSearchList = totalSize.slice(start, end)
      curPage = curPage + 1 
    }else {
      newCurrentSearchList = totalSize.slice(0, pageSize)
      curPage = 1
    }
    console.log("newCurrentSearchList:", newCurrentSearchList.toJS())
    return state.set('currentSearchList', newCurrentSearchList).set('currentPage', curPage)
  }
  if(action.type === constants.TOGGLE_BACK_TOP) {
    return state.set('showBackTop', action.show)
  }
  if(action.type === constants.LOGOUT) {
    return state.set('login', false)
  }
  return state;
}

export default reducer