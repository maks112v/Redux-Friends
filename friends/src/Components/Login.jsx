import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    creds: {
      username: "Lambda School",
      password: "i<3Lambd4"
    }
  };

  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.creds);
    this.setState({
      creds: {
        username: "",
        password: ""
      }
    });
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.props.loggingIn ? (
          <h3>Loading</h3>
        ) : (
          <form onSubmit={this.login}>
            <Input
              type="text"
              placeholder="Username"
              value={this.state.creds.username}
              onChange={this.handleChange}
              name="username"
            />
            <br />
            <Input
              type="password"
              placeholder="Password"
              value={this.state.creds.password}
              onChange={this.handleChange}
              name="password"
            />
            <br />
            <Button type="submit">Login</Button>
          </form>
        )}
      </div>
    );
  }
}

const stateToProps = state => ({
  loggingIn: state.loggingIn
});

export default connect(
  stateToProps,
  { login }
)(Login);
