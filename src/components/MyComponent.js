import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nguyen Van A", age: 18 },
      { id: 2, name: "Nguyen Van B", age: 29 },
      { id: 3, name: "Nguyen Van C", age: 7 },
    ],
  };
  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  handleDeleteUser = (userID) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userID);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  render() {
    return (
      <>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </>
    );
  }
}

export default MyComponent;
