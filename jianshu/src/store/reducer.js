import { reducer as headerReducer} from '../common/header/store'

// 将combineReducers从redux中获取改变从redux-immutable中获取 
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

export default combineReducers({
  header: headerReducer
})