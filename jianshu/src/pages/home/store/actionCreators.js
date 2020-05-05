import * as constants from './constants'
import axios from 'axios'


const changeHomeData = (data) => ({
  type: constants.HOME_DATA,
  articleList: data.articleList,
  topicList: data.topicList
})
export const getHomeInfo = () => {
  // 使用redux-thunk后，可以返回一个接收dispatch参数的函数了
  return (dispatch) => {
    axios.get('./api/home.json').then(res =>{
      console.log(res.data)
      const data = res.data.data
      // 注意，这里得dispatch出去
      dispatch(changeHomeData(data))
    }).catch(err =>{
      console.log(err)
    })
  }
}

const moreArticles = (data) => ({
  type: constants.MORE_ARTICLES,
  data
})
export const getMoreArticles = () => {
  return (dispatch) => {
    axios.get('./api/homeMore.json').then(res =>{
      console.log(res.data.data)
      dispatch(moreArticles(res.data.data.articleList))
    }).catch(err =>{
      console.log(err)
    })
  }
}