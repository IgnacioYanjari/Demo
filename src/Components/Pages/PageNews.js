import React, { Component } from 'react';
import ContentNews from './../Content/ContentNews.js';
import FooterMain from './../Footer/FooterMain.js';
import HeaderNews from './../Headers/HeaderNews.js';
import './../../App.css';

class PageNews extends Component {
  render() {
    return (
      <div>
        <HeaderNews/>
        <ContentNews/>
        <FooterMain/>
      </div>
    );
  }
}

export default PageNews;
