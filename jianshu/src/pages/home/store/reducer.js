import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
})

export default (state = defaultState, action) => {
  // if(action.type === constants.HOME_DATA) {
  //   // return state.set("topicList", fromJS(action.topicList)).set("articleList", fromJS(action.articleList))
  //   return state.merge({
  //     topicList: fromJS(action.topicList),
  //     articleList: fromJS(action.articleList)
  //   })
  // }
  switch(action.type) {
    case constants.HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
      })
    case constants.MORE_ARTICLES:
      console.log("old articleList:", state.get('articleList'))
      console.log(...fromJS(action.data))
      return state.merge({
        articleList: [...state.get('articleList'), ...fromJS(action.data)]
      })
    default:
      return state
  }
}