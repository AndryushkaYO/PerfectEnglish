import React, { Component } from 'react';
import MainPage from './components/Page/MainPage';
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
