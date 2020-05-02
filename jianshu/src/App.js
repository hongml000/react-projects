import React from 'react';
import Header from './common/header'
// 导入store相关
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    // 在组件最外层添加Provider组件，并将store传入
    <Provider store={store}>
      <div className="App">
        <Header></Header>
      </div>
    </Provider>
  );
}

export default App;
