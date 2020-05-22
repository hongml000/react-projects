import React, { Component } from 'react'
import Topics from './components/Topics'
import Recommend from './components/Recommend'
import Writers from './components/Writers'
import List from './components/List'
import Mychild from './components/Mychild'
import './index.css'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import TestuseReducer from './components/TestuseReducer'
class Home extends Component{
  render() {
    return (
      <div className="home-page">
        <div className="home-left">
          <img src="https://upload-images.jianshu.io/upload_images/17767332-7e8dd71badaf8037.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt="" className="home-img"/>
          <Topics />
          <List />
        </div>
        <div>
          <Recommend />
          <Writers />
          <TestuseReducer />
          <Mychild>
            {'hahahah'}
          </Mychild>
        </div>
      </div>
    )
  }
  componentDidMount() {
    // 最好不要将请求写在这里，尽量都放在action中
    this.props.getHomeData()
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeInfo())
    }
  }
  
}
export default connect(null, mapDispatchToProps)(Home);