import style from 'styled-components'
import logoImg from '../../statics/logo.png'
export const HeaderWrapper = style.div`
  height: 58px;
  border: 1px solid #f0f0f0;
  // background: red;
`

export const Logo = style.a`
  display: inline-block;
  width: 100px;
  height: 100%;
  padding: 0;
  background: url(${logoImg});
  background-size: 100% 100%;
`

export const Nav = style.div`
  display: inline-block;
  height: 100%;
  // width: 900px;
  margin:0 auto;
  background:yellow;

`
export const NavItem = style.div`
  display: inline-block;
  width: 65px;
  background: red;
`
