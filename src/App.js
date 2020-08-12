import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import List from './components/List';
import Test from './components/Text';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Test />
        <List />
      </div>
    );
  }
}

export default App;
