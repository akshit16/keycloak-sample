import React, { Component } from 'react';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: ""
    };
   
}
  render() {
    return (
      <div className="UserInfo">
        <p>Name: sample</p>
        <p>Email: sample</p>
        <p>ID: sample</p>
      </div>
    );
  }
}

export default UserInfo;
