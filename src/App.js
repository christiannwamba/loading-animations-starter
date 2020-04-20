import React from 'react';

import Main from './components/Main';
import Vertical from './components/Vertical';
import Horizontal from './components/Horizontal';
import Bounce from './components/Bounce';
import Ring from './components/Ring';
import Spin from './components/Spin';
import Trail from './components/Trail';
import Square from './components/Square';
import Inflate from './components/Inflate';
import Bubble from './components/Bubble';
import Bar from './components/Bar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Main>
        <h3>CSS3 Loading animations</h3>
        <Vertical></Vertical>
        <Horizontal></Horizontal>
        <Bounce></Bounce>
        <Ring></Ring>
        <Spin></Spin>
        <Trail></Trail>
        <Square></Square>
        <Inflate></Inflate>
        {/* <Bubble></Bubble> */}
        <Bar></Bar>
      </Main>
    </div>
  );
}

export default App;

// https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
