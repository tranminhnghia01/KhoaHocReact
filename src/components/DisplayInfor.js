import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHide, setIsShowHide] = useState(true);

  const handleShowHideListUser = () => {
    setIsShowHide(!isShowHide);
  };

  console.log("call me render");
  useEffect(() => {
    if (listUsers.length === 0) {
      alert("delete all users");
    }
    console.log("call me use Effect");
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHide ? "Hide" : "Show"} list Users :
        </span>
      </div>
      {isShowHide &&
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
