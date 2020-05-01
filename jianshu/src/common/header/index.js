import React, { Component } from 'react'
import { HeaderWrapper, Logo } from './style' 
import './index.css'
class Header extends Component {
  render() {
    return (
      <div>
        {/* 替代<div className="header">header</div>的写法，HeaderWrapper 替代了div.header 样式写法 */}
        <HeaderWrapper>header</HeaderWrapper>
        <Logo href='/'></Logo>
      </div>
    );
  }
}

export default Header;