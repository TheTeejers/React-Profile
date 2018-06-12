import React, { Component } from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js'
// import NeonLettersAbout from './components/NeonLettersAbout.js';
// import './components/NeonLetters.css';
// import './components/About.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
