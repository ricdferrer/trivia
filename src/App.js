import React, { Component } from 'react';
import './App.css';
import timer from './assets/hud-timer.png';
import tituloApoema from './assets/apoema-title.png';
import planets from './assets/hud-planets.png';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="nav nav__header">
          <img src={tituloApoema} alt="Apoema Geografia" />
        </div>
        <div className="main">
          <div className="section__body">
            <img src={planets} alt="Planetas" />
          </div>
        </div>
        <div className="footer">
          <div className="section__timer">
            <img src={timer} alt="Contador" />
          </div>
        </div>
      </div>
    );
  }
}