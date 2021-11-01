import React from 'react';

import './styles.css';

import stopWatchImg from './assets/cronometro.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      button: 'VAI',
    };

    this.timer = null;
  };

  go = () => {
    let state = this.state;

    if(this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null
      state.button = 'VAI';
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.number += 0.1;
  
        this.setState(state);
      }, 100);

      state.button = 'PAUSAR'
    };

    this.setState(state);
  };

  clear = () => {
    let state = this.state;

    if(this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    };

    state.number = 0;
    state.button = 'VAI';
    this.setState(state);

  };

  render() {
    return (
      <div className="container" >
        <img className="img" src={stopWatchImg} alt="cronometro" />
        <a className="timer" >{this.state.number.toFixed(1)}</a>

        <div className="areaBtn" >
          <a className="button"  onClick={this.go} >{this.state.button}</a>
          <a className="button"  onClick={this.clear} >LIMPAR</a>
        </div>
      </div>
    );
  };
};

export default App;