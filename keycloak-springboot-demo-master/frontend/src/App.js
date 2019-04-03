import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          
          <Route exact path="/" component={Welcome} />
          <Route path="/securedd" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
