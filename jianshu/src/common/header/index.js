// , { Component }
import React from 'react'
import './index.css'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
function Header(props) {
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
                in={props.focused} // 用哪个属性值来控制动画执行
                timeout={200}  // 0.2s的动画
                classNames="slide" 
              >
                <input 
                  type="text" 
                  className={ props.focused ? "search-input search-input-focus" : "search-input"} //
                  placeholder="搜索"
                  onFocus={ props.handleFocus }
                  onBlur={ props.handleBlur }
                />
              </CSSTransition>
              <span 
                className={ props.focused ? "iconfont icon-fangdajing icon-fangdajing-focused" : "iconfont icon-fangdajing"}>
              </span>
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

// class Header extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   // this.state = {
//   //   //   focused: false
//   //   // }
//   //   this.handleFocus = this.handleFocus.bind(this)
//   //   this.handleBlur = this.handleBlur.bind(this)
//   // }
//   render() {
//     return (
//       <div>
//         {/* 替代<div className="header">header</div>的写法，HeaderWrapper 替代了div.header 样式写法 */}
//         <div className="header">
          
//           <div className="header-left">
//             <a  className="logo" href="/"></a>
//             <div className="title-menu-left">
//               <div className="title-menu-item">发现</div>
//               <div className="title-menu-item">关注</div>
//               <div className="title-menu-item">消息</div>
//               <div className="title-menu-item search-item" >
//                 <CSSTransition
//                   in={this.props.focused} // 用哪个属性值来控制动画执行
//                   timeout={200}  // 0.2s的动画
//                   classNames="slide" 
//                 >
//                   <input 
//                     type="text" 
//                     className={ this.props.focused ? "search-input search-input-focus" : "search-input"} //
//                     placeholder="搜索"
//                     onFocus={this.props.handleFocus}
//                     onBlur={this.props.handleBlur}
//                   />
//                 </CSSTransition>
//                 <span 
//                   className={this.props.focused ? "iconfont icon-fangdajing icon-fangdajing-focused" : "iconfont icon-fangdajing"}>
//                 </span>
//               </div>
//             </div>

            
//           </div>
//           <div className="header-right">  
//             <div className="fuhao">
//               <span className="iconfont icon-Aa"></span>
//             </div>
//             <div className="menu-logo"></div>
//             <div className="write">
//               <span className="iconfont icon-iconset0137"></span>
//               写文章
//             </div>
//           </div>
//         </div>

//       </div>
//     );
//   }
// }
const mapStateToProps = (state) => {
  return {
    // props: store.state；当reducer的数据多一层header时，这里也必须多一层header才能取到对应的值
    focused: state.header.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // props上的方法直接定义在这里，然后dispatch action改变store里的值
    handleFocus() {
      // const action = {
      //   type: 'search_focus'
      // }
      // dispatch(action);
      dispatch(actionCreators.searchFocus())
    },
    handleBlur() {
      // const action = {
      //   type:'search_blur'
      // }
      // dispatch(action);
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);