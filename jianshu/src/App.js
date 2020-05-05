import React from 'react';
import Header from './common/header'
// 导入store相关
import store from './store'
import { Provider } from 'react-redux'
// 导入路由
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
function App() {
  return (
    // 在组件最外层添加Provider组件，并将store传入
    <Provider store={store}>     
        <BrowserRouter>
          {/* Link不能在router外使用，所以就把Header组件放进Router里来 */}
          <Header></Header>
          <Route path="/" exact component={Home}></Route>
          {/* 第一种，动态路由 */}
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
