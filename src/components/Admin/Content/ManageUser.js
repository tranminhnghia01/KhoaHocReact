import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
  const [showModelCreateUser, setShowModelCreateUser] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">Mange User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-success"
            onClick={() => setShowModelCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">table users</div>
        <ModalCreateUser
          show={showModelCreateUser}
          setShow={setShowModelCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
