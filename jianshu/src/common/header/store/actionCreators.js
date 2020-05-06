import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

const searchList = (data) => ({
  type: constants.SEARCH_LIST,
  data: fromJS(data)
})
export const getSearchList = () => {
  // 使用redux-thunk后，可以返回一个接收dispatch参数的函数了
  return (dispatch) => {
    axios.get('api/headerList.json').then(res => {
      console.log(res)
      const totalList = res.data.data
      const length = totalList.length
      console.log(length)
      // 注意，这里得dispatch出去
      dispatch(searchList(res.data.data))
    }).catch(err =>{
      console.log(err)
    })
  }
}

export const changePage = () => ({
  type: constants.CHANGE_PAGE
})

export const mouseIn = () => ({
  type: constants.MOUSE_IN
})

export const mouseOut = () => ({
  type: constants.MOUSE_OUT
})

export const toggleBackTop = (show) => ({
  type: constants.TOGGLE_BACK_TOP,
  show
})

export const logout = () => ({
  type: constants.LOGOUT
})

