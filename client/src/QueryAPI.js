import React, { Component } from 'react';
import axios from 'axios';
class APIResponse extends Component {
  render() {
    if(!this.props.response)
      return (<div/>);
    else
      return ( <pre>{this.props.response}</pre> );
  }
}

class QueryAPI extends Component {

  constructor(props) {
    super(props);
    this.state = { response: null };
  
  this.props.keycloak.loadUserInfo().then(userInfo => {
    this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.role, roles: JSON.stringify(this.props.keycloak.tokenParsed.resource_access.spring.roles)})


  })
}

  authorizationHeader() {
    if(!this.props.keycloak) return {};
    return {
      headers: {
        "Authorization": "Bearer " + this.props.keycloak.token
      }
    };
  }

sendData=()=>{
  let data = {name: this.state.name};
  axios.post('http://localhost:9000/api/customer', data,this.authorizationHeader(),{
    headers: { 'Content-Type': 'application/json' }
  })
  .then(function (res){
    console.log(res.data)
})
}

  handleClick = () => {
    fetch('http://localhost:9000/api/user', this.authorizationHeader())
      .then(response => {
        if (response.status === 200)
          return response.json();
        else
          return { status: response.status, message: response.statusText }
      })
      .then(json => this.setState((state, props) => ({
        response: JSON.stringify(json, null, 2)
      })))
      .catch(err => {
        this.setState((state, props) => ({ response: err.toString() }))
      })
  }

  render() {
    return (
      <div className="QueryAPI">
        <button onClick={this.handleClick}>Send API request</button>
        <button onClick={this.sendData}>Send Post request</button>

        <APIResponse response={this.state.response}/>
      </div>
    );
  }
}

export default QueryAPI;
