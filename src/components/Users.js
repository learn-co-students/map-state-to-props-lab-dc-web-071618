import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <br></br>
          Total Users: {this.props.users.length}
        </ul>
        {this.props.users.map(user =>
          <li>
          Username: {user.username}
          </li>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Users)
