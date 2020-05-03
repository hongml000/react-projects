// 
import React, { Component } from 'react'
import './index.css'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
// function Header(props) {
class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  getSearchContent() {
    const { changeSearchContent, currentSearchList, mouseEnter, focused, mouseIn, mouseLeave } = this.props
    const searchContent = (<div className="search-content" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <p className="search-header">
          <span className="search-title">热闹搜索</span>
          <span className="search-switch" onClick={() => changeSearchContent(this.switchIcon) } >
            {/* 使用ref标识iconfont元素 */}
            <span ref={(switchIcon) =>{ this.switchIcon = switchIcon}} style={{transform: 'rotate(0deg)'}} className="iconfont icon-xuanzhuan_huaban1"></span>
            换一换
          </span>
        </p>
        <div>
          {/* immutable对象也可以直接使用map  searchList*/}
          { 
            currentSearchList.map(item => {
              return <span className="search-content-item" key={item}>{item}</span>
            })
          }

        </div>
      </div>
    )
    return (focused || mouseIn) ? searchContent : '';
    // return searchContent

  }
  render() {
    const { focused, handleFocus, handleBlur, searchList } = this.props;
    return (
      <div>
        <div className="header">
          <div className="header-left">
            <a  className="logo" href="/"></a>
            <div className="title-menu-left">
            <div className="title-menu-item">发现</div>
            <div className="title-menu-item">关注</div>
            <div className="title-menu-item">消息</div>
            <div className="title-menu-item search-item" >
              <CSSTransition
                in={ focused } // 用哪个属性值来控制动画执行
                timeout={200}  // 0.2s的动画
                classNames="slide" 
              >
                <input 
                  type="text" 
                  className={ focused ? "search-input search-input-focus" : "search-input"} //
                  placeholder="搜索"
                  onFocus={ () => handleFocus(searchList) }
                  onBlur={ handleBlur }
                />
              </CSSTransition>
              <span 
                className={ focused ? "iconfont icon-fangdajing icon-fangdajing-focused" : "iconfont icon-fangdajing"}>
              </span>
              {this.getSearchContent(focused)}
              
            </div>
          </div>
        </div>
          <div className="header-right">  
            <div className="fuhao">
            <span className="iconfont icon-Aa"></span>
          </div>
            <div className="menu-logo"></div>
            <div className="write">
            <span className="iconfont icon-iconset0137"></span>
            写文章
          </div>
        </div>
      </div>
    </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    // props: store.state；当reducer的数据多一层header时，这里也必须多一层header才能取到对应的值
    // focused: state.header.focused

    // 当通过immutable管理store值时，获取值必须通过get方法获取
    //  focused: state.header.get('focused')

    // 将state也变成immutable对象后，获取的方法变为
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']), //等同于上一句
    searchList: state.getIn(['header', 'searchList']),
    currentPage: state.getIn(['header', 'currentPage']),
    pageSize: state.getIn(['header', 'pageSize']),
    currentSearchList: state.getIn(['header', 'currentSearchList']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // props上的方法直接定义在这里，然后dispatch action改变store里的值
    handleFocus(searchList) {
      // 改变focused
      dispatch(actionCreators.searchFocus())
      if(searchList.size ===0) {
        // 增加一个调用ajax请求的actionCreators
        dispatch(actionCreators.getSearchList())
      }
    },
    handleBlur() {
      // const action = {
      //   type:'search_blur'
      // }
      // dispatch(action);
      dispatch(actionCreators.searchBlur())
    },
    changeSearchContent(switchIcon) {
      const transform = switchIcon.style.transform
      // 获取transform样式，一开始因为没写样式，所以为空；注意，这里如果是在css中写的，一样获取不到，style只获取内联样式，所以要在写style内联样式
      // if(transform) {
        const oldAngle = parseInt(transform.replace(/[^\d]/g, ''))
        switchIcon.style.transform = 'rotate('+ (oldAngle + 90) + 'deg)'
      // }else {
      //   switchIcon.style.transform = 'rotate(0deg)'
      // }
      
      dispatch(actionCreators.changePage())
    },
    mouseEnter() {
      dispatch(actionCreators.mouseIn())
    },
    mouseLeave() {
      dispatch(actionCreators.mouseOut())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);