import { reducer as headerReducer} from '../common/header/store'
import { combineReducers} from 'redux'

export default combineReducers({
  header: headerReducer
})