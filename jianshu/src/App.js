import React from 'react';
import { GlobalStyled } from './styles/style.js';
import Header from './common/header'
function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Header></Header>
    </div>
  );
}

export default App;
