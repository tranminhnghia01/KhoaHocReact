import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "",
    age: "",
  };
  handleOnChangeInput = (e) => {
    this.setState({ name: e.target.value });
  };

  handleOnChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
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

export default AddUserInfo;
