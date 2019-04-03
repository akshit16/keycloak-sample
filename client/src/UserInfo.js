import React, { Component } from 'react';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: "",
      roles:""
    };
    this.props.keycloak.loadUserInfo().then(userInfo => {
        this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.role, roles: JSON.stringify(this.props.keycloak.tokenParsed.resource_access.spring.roles)})
   
   
      },
      
     // rolee.push(JSON.stringify(this.props.keycloak.tokenParsed.resource_access.spring.roles)),
  //    alert(JSON.stringify(this.props.keycloak.tokenParsed.resource_access.spring.roles))
      );
  }
componentDidMount(){
let role;
role = (JSON.stringify(this.props.keycloak.tokenParsed.resource_access.spring.roles))
console.log("roles",role)
}
  render() {
   // console.log(this.props.keycloak.loadUserInfo())
    return (
      <div className="UserInfo">
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>ID: {this.state.id}</p>
        <p>roles:{this.state.role}</p>
      </div>
    );
  }
}

export default UserInfo;
