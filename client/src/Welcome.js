import React, { Component } from 'react';
import QueryAPI from './QueryAPI';
import {Link} from 'react-router-dom';
class Welcome extends Component {

  render() {
    return (

      
      <div className="Welcome">
       <li><Link to="/secured">Login</Link></li>
        <p>This is your public-facing component.</p>
      </div>
    );
  }
}

export default Welcome;
