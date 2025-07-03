import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Nghia",
    address: "Minh Nghia 11a1",
    age: 25,
  };
  handleOnChangeInput = (e) => {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  };

  handleOnChangeAge = (e) => {
    this.setState({ age: e.target.value });
    console.log(e.target.value);
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        My name is {this.state.name}, age {this.state.age}
        <form
          onSubmit={(e) => {
            this.handleOnSubmit(e);
          }}
        >
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(e) => {
              this.handleOnChangeInput(e);
            }}
          />

          <label>Your age:</label>
          <input
            value={this.state.age}
            type="number"
            onChange={(e) => {
              this.handleOnChangeAge(e);
            }}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default UserInfo;
