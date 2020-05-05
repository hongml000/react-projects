import axios from 'axios'
import * as constants from './constants'
const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
})
export const getDetail = (id) => {
  return (dispatch) =>{
    // api前面记得写/要求根目录，否则会默认当前url路径./下去寻找
    axios.get('/api/detail.json?id=' + id).then(res => {
      const data = res.data.data
      dispatch(changeDetail(data.title, data.content))
    }).catch(err =>{
      console.log(err)
    })
  }
}

