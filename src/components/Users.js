import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.userCount}</p>
        <ul>
          Users!
          {this.props.users.map((u, idx) => {
            return <li key={idx}>{u.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
