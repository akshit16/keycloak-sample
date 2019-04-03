import React, { Component } from 'react';
import UserInfo from './UserInfo';
import { BrowserRouter, Route, Link } from 'react-router-dom';
class Secured extends Component {


  state = {
    data: null,
    keycloak: null,
    authenticated: null
  };

  componentDidMount=()=> {
      // Call our fetch function below once the component mounts
      console.log("something")
    this.callBackendAPI()
      
  }
  callBackendAPI = async () => {
    const response = await fetch('http://localhost:9000/security');
    console.log("some")
    const body = await response.json();
console.log(response);
console.log(body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    this.setState({data:body.exp[1]})
    return body;
  };

  

  render() {
    return (
        <div>
          {this.state.data=="architect"&&
          <p>
            
            This is a Keycloak-secured component of your application. You shouldn't be able to see this
            unless you've authenticated with Keycloak.
          
          </p>
          }
          <UserInfo/>
     	<ul>
            <li>{this.state.data}</li>
            <li><a href="http://localhost:9000/logout">Logout</a></li>
         </ul>
        </div>
      ); 
    }
  
  
}

export default Secured;
