import reducer from './reducer'
// 导入thunk和applyMiddleware
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 增加composeEnhancers的参数
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;