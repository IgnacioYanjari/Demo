import React, { Component } from 'react';
import ContentHolidays from './../Content/ContentHolidays.js';
import FooterMain from './../Footer/FooterMain.js';
import HeaderNews from './../Headers/HeaderNews.js';
import './../../App.css';

class PageNews extends Component {
  render() {
    return (
      <div>
        <HeaderNews/>
        <ContentHolidays/>
        <FooterMain/>
      </div>
    );
  }
}

export default PageNews;
