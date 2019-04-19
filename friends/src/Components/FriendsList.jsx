import React from "react";
import { Table } from "reactstrap";
import PreloadTable from "./PreloadTable";
import Friend from "./Friend";
import Skeleton from "react-loading-skeleton";

import { connect } from "react-redux";

const FriendList = props => {
  if (props.isLoading) {
    return <PreloadTable />;
  }
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {props.friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            updateHandler={props.updateHandler}
          />
        ))}
        {props.isAdding ? (
          <tr>
            <th>
              <Skeleton />
            </th>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </tr>
        ) : null}
      </tbody>
    </Table>
  );
};

const stateToProps = state => ({
  friends: state.friends,
  isLoading: state.isLoading,
  updateId: state.updateId,
  isAdding: state.isAdding
});

export default connect(stateToProps)(FriendList);
