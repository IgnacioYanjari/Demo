import React, { Component } from 'react';
import ContentMain from './../Content/ContentMain.js';
import FooterMain from './../Footer/FooterMain.js';
import HeaderMain from './../Headers/HeaderMain.js';
import './../../App.css'
class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMain/>
        <ContentMain/>
        <FooterMain/>
      </div>
    );
  }
}

export default MainPage;
