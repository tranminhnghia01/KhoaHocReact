import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
class DisplayInfor extends React.Component {
  state = {
    isShow: true,
  };
  handleShowHide = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    // console.log(this.props);
    const { listUsers } = this.props;
    return (
      <div className="display-infor-container">
        <img src={logo} />
        <span
          onClick={() => {
            this.handleShowHide();
          }}
        >
          {this.state.isShow ? "Hide" : "Show"} list user:
        </span>
        {this.state.isShow &&
          listUsers.map((item) => {
            return (
              <div key={item.id} className={+item.age >= 18 ? "green" : "red"}>
                <div>My Name's {item.name}</div>
                <div>My age's {item.age}</div>
                <hr />
              </div>
            );
          })}
      </div>
    );
  }
}

export default DisplayInfor;
