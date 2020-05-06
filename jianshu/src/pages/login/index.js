import React, { Component } from 'react'
import './index.css'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Login extends Component {
  render() {
    const { login } = this.props
    if(!login) {
      return (
        <div className="login">
          账号：<input className="input" type="text" ref={(input) => {this.account = input}}/><br/>
          密码：<input className="input" type="text"  ref={(password) => {this.pwd = password}}/><br/>
          {/* 注意函数传参要写箭头函数 */}
          <button onClick={()=> login(this.account, this.pwd)}>登陆</button>
        </div>
        )
    }else {
      return <Redirect to="/"/>
    }
    
  }
}
const mapState = state => ({
  username: state.getIn(['login', 'username']),
  password: state.getIn(['login', 'password']),
  login: state.getIn(['login', 'login'])
})
const mapDispatch = dispatch =>{
  return {
    login(accountEle, pwdEle) {
      console.log(accountEle.value, pwdEle.value)
      dispatch(actionCreators.login(accountEle.value, pwdEle.value))
    }
  }
}
export default connect(mapState, mapDispatch)(Login)