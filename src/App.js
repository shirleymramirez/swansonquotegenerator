import React, { Component } from 'react';
import QuoteMainApp from './Components/QuoteMainApp/QuoteMainApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Quote Generator from Ron Swanson Quotes API”</h1>
        <QuoteMainApp />
      </div>
    );
  }
}

export default App;
