import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nguyen Van A", age: 18 },
      { id: 2, name: "Nguyen Van B", age: 19 },
      { id: 3, name: "Nguyen Van C", age: 17 },
    ],
  };
  render() {
    return (
      <>
        <UserInfo />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </>
    );
  }
}

export default MyComponent;
