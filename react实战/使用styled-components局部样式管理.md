# 引入styled-Components管理样式
```npm install styled-components```
将css样式变成js文件：
* 将src/index.css改为style.js
```js
// style.js
import { createGlobalStyle } from 'styled-components'
// 将css写成段落字符串
export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    background: red;
  }
`
```
* app.js中引入style.js
```js
import React from 'react';
import { GlobalStyled } from './style.js';

function App() {
  return (
    <div className="App">
      <GlobalStyled><GlobalStyled />
      hello world
    </div>
  );
}


export default App;
```
# 在所有浏览器上实现一个统一的样式
为了在所有浏览器上的样式保持一致，需要引入一个统一的风格，百度reset.css,将对应样式放入到style.js中
reset.css:https://meyerweb.com/eric/tools/css/reset/
```js
import { createGlobalStyle } from 'styled-components'
// 段落字符串``
export const GlobalStyled = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
```

## styled-components好处与不好之处
好处：
* 实现样式局部化，避免全局污染
  
不好之处：
* 没有css样式提示
* 写法麻烦，不得于记忆


