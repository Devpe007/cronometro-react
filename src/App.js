import React from 'react';

import './styles.css';

import stopWatchImg from './assets/cronometro.png';

class App extends React.Component {
  render() {
    return (
      <div className="container" >
        <img className="img" src={stopWatchImg} alt="cronometro" />
        <a className="timer" >0.0</a>

        <div className="areaBtn" >
          <a className="button" >VAI</a>
          <a className="button" >LIMPAR</a>
        </div>
      </div>
    );
  };
};

export default App;