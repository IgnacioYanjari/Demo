import React, { Component } from 'react';
import MainPage from './Components/Pages/MainPage.js';
import PageNews from './Components/Pages/PageNews.js';
import { HashRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <div>
          <Route exact path ={"/"} component={MainPage} />
          <Route exact path ={"/noticias"} component={PageNews} />
        </div>
      </Router>
    );
  }
}

export default App;
