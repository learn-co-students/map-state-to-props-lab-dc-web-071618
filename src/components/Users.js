import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.userCount}</ul>
        <ul>{this.props.users.map(user => <li>{user.username}</li>)}</ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    //return an object with keys. Each key will become a prop in your Component
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
