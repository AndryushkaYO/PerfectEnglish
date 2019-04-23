import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppRouter from './AppRouter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header >          
            <AppRouter/>          
        </header>

      </div>
    );
  }
}

export default App;
