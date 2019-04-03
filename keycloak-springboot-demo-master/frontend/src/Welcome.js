import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Secured from './Secured';
import './App.css';
import axios from 'axios';
class Welcome extends Component {

state={
data:''
}
componentDidMount() {
  // Call our fetch function below once the component mounts
console.log("some")
}
callBackendAPI = async () => {
  const response = await fetch('/secured');
  const body = await response.json();
console.log(body)
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};
  onSubmit=()=> {
  
    axios.post('/secured')       
    }

  render() {
    return (
      <div className="Welcome">
         <a href="http://localhost:9000/customers">Customers</a>

      	{/* <ul>
            
        <input type="submit" value="submit" onClick={this.onSubmit}/>
        
        
         </ul>
        <p>This is your public-facing component.</p> */}
      </div>
    );
  }
}

export default Welcome;
