import { fromJS } from 'immutable'
import  * as constants  from './constants' 
const defaultState = fromJS({
  username: '',
  password: '',
  login: false
})

export default (state = defaultState, action) => {
  if(action.type === constants.LOGIN) {
    return state.merge({
      login: true,
      username: action.username,
      password: action.password
    })
  }
  return state;
}