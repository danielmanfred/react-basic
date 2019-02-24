import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './Form'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Form placeholderInput="Name"  banana="Orange" />
      </div>
    );
  }
}

export default App;
