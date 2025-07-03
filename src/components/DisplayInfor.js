import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    const { listUsers } = this.props;
    return (
      <>
        {listUsers.map((item) => {
          return (
            <div key={item.id}>
              <div>My Name's {item.name}</div>
              <div>My age's {item.age}</div>
            </div>
          );
        })}
      </>
    );
  }
}

export default DisplayInfor;
