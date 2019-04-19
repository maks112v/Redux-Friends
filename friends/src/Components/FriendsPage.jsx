import React, { Component } from "react";
import FriendsList from "./FriendsList";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import AddFriend from './FriendForm';

class FriendsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <Container>
        <AddFriend />
        <FriendsList />
      </Container>
    );
  }
}

const stateToProps = state => ({
  friends: state.friends
});

export default connect(stateToProps,{ getFriends })(FriendsPage);
