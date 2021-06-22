import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
// import SelectedBeast from "./SelectedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';


 class App extends Component {
  render() {
    return (
      <>
        <Header/>
        {/* <Main> */}
        {/* <SelectedBeast /> */}
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App
