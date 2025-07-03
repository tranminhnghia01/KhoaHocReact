import { logo } from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";

import React from "react";

class App extends React.Component {
  state = {
    name: "Nghia",
    address: "Minh Nghia 11a1",
    age: 25,
  };

  handleClick(event) {
    console.log("My name is", this.state.name);
    this.setState({ name: "Eric", age: Math.floor(Math.random() * 100) });
  }

  handleOnChangeInput = (e) => {
    this.setState({ name: e.target.value });
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
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me!
        </button>
        <form
          onSubmit={(e) => {
            this.handleOnSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.handleOnChangeInput(e);
            }}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello world!</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
