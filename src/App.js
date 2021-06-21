import React, { Component } from 'react';
import Header from './src/Header.js';
import Footer from './src/Footer.js';
import Main from './src//Main.js';

 class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App
