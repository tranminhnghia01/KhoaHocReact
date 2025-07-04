import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
// class DisplayInfor extends React.Component {
//   render() {
//     console.log("Call render");
//     const { listUsers } = this.props;
//     return (
//       <div className="display-infor-container">
//         {/* <img src={logo} /> */}
//         {true &&
//           listUsers.map((item) => {
//             return (
//               <div key={item.id} className={+item.age >= 18 ? "green" : "red"}>
//                 <div>
//                   <div>My Name's {item.name}</div>
//                   <div>My age's {item.age}</div>
//                 </div>
//                 <div>
//                   <button onClick={() => this.props.handleDeleteUser(item.id)}>
//                     X
//                   </button>
//                 </div>
//                 <hr />
//               </div>
//             );
//           })}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  return (
    <div className="display-infor-container">
      {/* <img src={logo} /> */}
      {true &&
        listUsers.map((item) => {
          return (
            <div key={item.id} className={+item.age >= 18 ? "green" : "red"}>
              <div>
                <div>My Name's {item.name}</div>
                <div>My age's {item.age}</div>
              </div>
              <div>
                <button onClick={() => props.handleDeleteUser(item.id)}>
                  X
                </button>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};
export default DisplayInfor;
