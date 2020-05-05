import { reducer as headerReducer} from '../common/header/store'
import homeReducer from '../pages/home/store/reducer'
import { reducer as detailReducer } from '../pages/detail/store'
// 将combineReducers从redux中获取改变从redux-immutable中获取 
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})