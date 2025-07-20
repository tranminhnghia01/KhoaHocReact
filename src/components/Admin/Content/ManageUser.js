import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  const [showModelCreateUser, setShowModelCreateUser] = useState(false);
  const [showModelUpdateUser, setShowModelUpdateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});

  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModelUpdateUser(true);
    setDataUpdate(user);
  };

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-success"
            onClick={() => setShowModelCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModelCreateUser}
          setShow={setShowModelCreateUser}
          fetchListUsers={fetchListUsers}
        />

        <ModalUpdateUser
          show={showModelUpdateUser}
          setShow={setShowModelUpdateUser}
          dataUpdate={dataUpdate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
