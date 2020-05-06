import * as constants  from './constants' 
import axios from 'axios'

export const changeLogin = () => ({
  type: constants.LOGIN
})

export const login = (username, password) => {
  return dispatch => {
    axios.get('api/login.json?username=' + username + '&password=' + password).then(res =>{
      console.log(res.data)
      if(res.data.data.login === "true") {
        console.log("ok")
        dispatch(changeLogin())
      }
    }).catch(err =>{
      alert('登陆失败')
      console.log(err)
    })
  }
}