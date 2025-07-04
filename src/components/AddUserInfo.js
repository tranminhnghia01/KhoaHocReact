import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     age: "",
//   };
//   handleOnChangeInput = (e) => {
//     this.setState({ name: e.target.value });
//   };

//   handleOnChangeAge = (e) => {
//     this.setState({ age: e.target.value });
//   };
//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: name,
//       age: age,
//     });
//   };

//   render() {
//     return (
//       <>
//         My name is {name}, age {age}
//         <form
//           onSubmit={(e) => {
//             this.handleOnSubmit(e);
//           }}
//         >
//           <label>Your name:</label>
//           <input
//             value={name}
//             type="text"
//             onChange={(e) => {
//               this.handleOnChangeInput(e);
//             }}
//           />

//           <label>Your age:</label>
//           <input
//             value={age}
//             type="number"
//             onChange={(e) => {
//               this.handleOnChangeAge(e);
//             }}
//           />
//           <button>Submit</button>
//         </form>
//       </>
//     );
//   }
// }

const AddUserInfo = (props) => {
  // state = {
  //   name: "",
  //   age: "",
  //   id: "",
  // };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <>
      My name is {name}, age {age}
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(e) => {
            handleOnChangeInput(e);
          }}
        />

        <label>Your age:</label>
        <input
          value={age}
          type="number"
          onChange={(e) => {
            handleOnChangeAge(e);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
export default AddUserInfo;
